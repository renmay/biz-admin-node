'use strict';

module.exports = app => {
    class AuthService extends app.Service {

        async get() {
            /**
             * 请求后台接口
             */
            const result = await this.ctx.fetch(this.app.urls('auth'), {
                method: 'get',
                dataType: 'json',
            });
            const data = result.data;
            this.app.logger.info('data:', data);

            if (data.code !== 200) {
                throw new Error(data.message ? data.message : 'error');
            }

            return data.data;
        }


    }

    return AuthService;
};
