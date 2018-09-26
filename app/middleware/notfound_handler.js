/**
 * 404
 * @param options
 * @param app
 * @returns {sessionRedis}
 */
module.exports = (options, app) => {
    return async function errorHandler(ctx, next) {
        await next();
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON){
                ctx.body = {
                    coe: 404,
                    message: 'Not Found'
                };
            }else{
                ctx.redirect('/404');
            }
        }
    };
};

