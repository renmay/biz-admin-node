'use strict';

module.exports = app => {
    class DirtrictService extends app.Service {
        constructor(ctx) {
            super(ctx);
        }

        /**
         * 获取用户地址
         * memberId 用户id 必传
         * id: 地址id 如果为空 返回默认地址
         * @param params
         */
        async get(params) {
            const result = await this.ctx.curl(this.app.urls('districtQuery'), {
                dataType: 'json',
                data: params
            });

            this.app.logger.info(result.data);
            let data = result.data;

            if (data.code != 200){
                throw new Error(data.message ? data.message : 'error');
            }

            return data.data;
        }


        /**
         * 获取列表
         * @param params
         * @returns {{}}
         */
        async list(params) {
            /**
             * 请求后台接口
             */
            const result = await this.ctx.curl(this.app.urls('district', params), {
                dataType: 'json'
            });

            this.app.logger.info(result.data);
            let data = result.data;

            if (data.code != 200){
                throw new Error(data.message ? data.message : 'error');
            }

            return data.data;
        }

        /**
         * 获取区域信息
         * @param params
         */
        async district(params){
            const result = await this.ctx.curl(this.app.urls('district', params), {
                dataType: 'json'
            });

            this.app.logger.info(result.data);
            let data = result.data;

            if (data.code != 200){
                throw new Error(data.message ? data.message : 'error');
            }
            return data.data;
        }
    }

    return DirtrictService;
};
