const util = require('util');

/**
 * 统一错误处理
 * @param options
 * @param app
 * @returns {sessionRedis}
 */
module.exports = (options, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 注意：自定义的错误统一处理函数捕捉到错误后也要 `app.emit('error', err, this)`
      // 框架会统一监听，并打印对应的错误日志
      app.emit('error', err, this);

      app.logger.info(err.message);

      // 自定义错误时异常返回的格式
      // 要根据用户请求类型判断用要
      if (ctx.acceptJSON) {
        // 未登录
        if (err.message == 'Unauthorized') {
          return ctx.body = {
            code: 401,
            message: 'Unauthorized',
          };
        }
        return ctx.body = {
          code: 500,
          data: app.config.env === 'prod' ? '' : ctx.request,
          message: err.message ? err.message : '出错了',
        };


      }
      // 未登录
      if (err.message == 'Unauthorized') {
        return await ctx.redirect('/login');
      }
      const status = detectStatus(err);
      const code = err.code || err.type;
      let message = detectErrorMessage(ctx, err);
      if (code) {
        message = `${message} (code: ${code})`;
      }
      if (isProd(app)) {
        ctx.status = 500;
        ctx.body = `<h2>Internal Server Error, real status: ${status}</h2>`;
        return;
      }
      const locals = {
        title: err.name,
        url: ctx.url,
        message,
        errStack: err.stack,
        hostname: ctx.hostname,
        ip: ctx.ip,
        query: util.inspect(ctx.query),
        userAgent: ctx.header['user-agent'],
        accept: ctx.header.accept,
        cookie: util.inspect(ctx.header.cookie),
        session: '',
        coreName: app.poweredBy,
        baseDir: app.config.baseDir,
        config: util.inspect(app.config),
      };
      return await ctx.render('onerror_page.html', locals);


    }

  };
};

function detectErrorMessage(ctx, err) {
  // detect json parse error
  if (err.status === 400 &&
        err.name === 'SyntaxError' &&
        ctx.request.is('application/json', 'application/vnd.api+json', 'application/csp-report')) {
    return 'Problems parsing JSON';
  }
  return err.message;
}

function detectStatus(err) {
  // detect status
  let status = err.status || 500;
  if (status < 200) {
    // invalid status consider as 500, like urllib will return -1 status
    status = 500;
  }
  return status;
}


function isProd(app) {
  return app.config.env !== 'local' && app.config.env !== 'unittest';
}
