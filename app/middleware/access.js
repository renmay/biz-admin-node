const path = require('path');
const util = require('util');

module.exports = () => {
    const skipExt = [ '.png', '.jpeg', '.jpg', '.ico', '.gif' ];
    return async function (ctx, next) {
        const start = new Date().getTime();

        await next();

        const rs = Math.ceil(new Date().getTime() - start);

        ctx.set('X-Response-Time', rs);

        const ext = path.extname(ctx.url).toLocaleLowerCase();
        const isSkip = skipExt.indexOf(ext) !== -1 && ctx.status < 400;

        if (!isSkip) {
            const ip = ctx.request.get('X-Real-IP') || ctx.request.ip;
            const port = ctx.request.get('X-Real-Port');
            const protocol = ctx.request.protocol.toUpperCase();
            const method = ctx.request.method;
            const url = ctx.request.url;
            const status = ctx.status;
            const length = ctx.request.length || '-';
            const referrer = ctx.request.get('referrer') || '-';
            const ua = ctx.request.get('user-agent') || '-';
            const serverTime = ctx.response.get('X-Server-Response-Time') || '-';
            const message = util.format('[access] %s:%s - %s %s %s/%s %s %s %s %s %s',
                ip, port, method, url, protocol, status, length, referrer, rs, serverTime, ua);
            ctx.app.logger.info(message);
        }
    };
};

