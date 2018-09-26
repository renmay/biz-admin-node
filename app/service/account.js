'use strict';

module.exports = app => {
    class Accountservice extends app.Service {


        /**
         * 获取数据
         * @param params
         */
        async get(params) {
            this.app.logger.info(params);
            this.app.logger.info("=========get");
            const result = await this.ctx.fetch(this.app.urls('account')+'/get', {
                method: 'get',
                dataType: 'json',
                data: params,
            });
            this.app.logger.info(result.data);
            const data = result.data;
            if (data.code !== 200) {
                throw new Error(data.message ? data.message : 'error');
            }
            return data.data;
        }


        /**
         *
         * @param params
         * @return {Promise<void>}
         */
        async list(params) {
            /**
             * 请求后台接口
             */
            const result = await this.ctx.fetch(this.app.urls('account') + '/list', {
                method: 'get',
                dataType: 'json',
                data: params,
            });
            this.app.logger.info(result);
            this.app.logger.info('==============================account============================');
            const data = result.data;
            this.app.logger.info(data.data);
            if (result.data.code !== 200) {
                throw new Error(data.message ? data.message : 'error');
            }
            return data.data;
        }


        /**
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @returns {{}}
         */
        async edit_(params) {
            let url = this.app.urls('account') + '/add';
            if (params.id && params.id !== '') {
                url = this.app.urls('account') + '/edit';
            }
            const result = await this.ctx.fetch(url, {
                dataType: 'json',
                data: params,
                method: 'post',
            });
            this.app.logger.info(result.data);
            const data = result.data;

            if (result.data.code !== 200) {
                throw new Error(data.message ? data.message : 'error');
            }

            return result.data;
        }

        /**
         * enable
         * @param params
         * @returns {{}}
         */
        async enable(params) {
            const result = await this.ctx.fetch(this.app.urls('account') + '/enable', {
                method: 'post',
                dataType: 'json',
                data: params,
            });
            return result.data;
        }

        /**
         * disable
         * @param params
         * @returns {{}}
         */
        async disable(params) {
            const result = await this.ctx.fetch(this.app.urls('account') + '/disable', {
                method: 'post',
                dataType: 'json',
                data: params,
            });
            return result.data;
        }


        /**
         * modifyPassword
         * @param params
         * @returns {{}}
         */
        async modifyPassword(params) {
            const result = await this.ctx.fetch(this.app.urls('account') + '/update/password', {
                method: 'post',
                dataType: 'json',
                data: params,
            });
            return result.data;
        }

    }

    return Accountservice;
};
