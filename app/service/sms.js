'use strict';

module.exports = app => {
    class SmsService extends app.Service {
        constructor(ctx) {
            super(ctx);
        }

        /**
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @returns {{}}
         */
        async send(params) {
            const result = await this.ctx.curl(`${this.app.urls('sms')}/send`, {
                method: 'post',
                dataType: 'json',
                data: params
            });
            return result.data;
        }

    }

    return SmsService;
};
