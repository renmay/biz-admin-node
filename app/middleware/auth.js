const menu = require('../data/menu');
/**
 * 用户权限验证
 * @param options
 * @param app
 * @returns {sessionRedis}
 */
module.exports = () => {
    return async function sessionRedis(ctx, next) {
        let member = ctx.session.member;
        if (!member || !member.id){
            return ctx.redirect('/login');
        }

        ctx.app.logger.info(`auth:${ctx.session.member.id}`);

        //在用户登录后查询用户拥有权限的菜单
        //根据url查找对应的菜单
        if ('GET' == ctx.request.method) {//get请求
            //this.logger.info(menu.getMenu(this.request.path));
            ctx.app.locals.menu = menu.getMenu(ctx.request.path);
        }

        await next();
    }
};
