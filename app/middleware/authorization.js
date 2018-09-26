/**
 * 用户权限验证
 * @param options
 * @param app
 * @returns {sessionRedis}
 */
module.exports = () => {
    return async function Token(ctx, next) {
        // let authorization = ctx.get('authorization');
        //
        // if (!authorization){
        //     return ctx.redirect('/login');
        // }
        //
        // ctx.app.logger.info(`${ctx.request.url}:${ctx.session.token}`);
        //
        // ctx.session.token = authorization; //"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZCIsImV4cCI6MTUyMTA5NDQwNCwiaWF0IjoxNTIxMDM0NDA0LCJ0b2tlbiI6IjI4YTQ3NWRhM2E0NTQyMDRiMzk5ODQzODUxYmY1MTAwIn0.u-Bxziig3Gw3AKJI_vsFum5uDeTujKtCe0SSph6-ylo";

        // ctx.app.logger.info(ctx.url);
        //
        const token = ctx.session.token;
        if (!token) {
            let data = await ctx.service.auth.get();
            ctx.app.logger.info(data);
            if (200 == data.code){
                let authorization = data.data.authorization;
                ctx.session.token = authorization;
            }
        }

        // let data = await ctx.service.auth.get();
        // ctx.app.logger.info(data);
        // if (200 == data.code){
        //     let authorization = data.data.authorization;
        //     ctx.session.token = authorization;
        //
        //     await ctx.service.sms.send({
        //         mobile: 18286140095
        //     });
        //
        //     await ctx.service.login.login({
        //         mobile: 18286140095,
        //         code: '8888'
        //     });
        // }


        await next();
    };
};
