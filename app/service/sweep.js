'use strict';

module.exports = app => {
    class SweepService extends app.Service {
        /**
         *
         * @param params
         * @returns {Promise<void>}
         */
        async list(params) {
            /**
             * 请求后台接口
             */
            const result = await this.ctx.fetch(this.app.urls('sweep'), {
                dataType: 'json',
                data: params,
            });

            this.app.logger.info(result.data);
            const data = result.data;

            if (result.data.code !== 200) {
                throw new Error(data.message ? data.message : 'error');
            }

            return result.data.data;
        }
        /**
         * 删除
         * @param params
         */
        async delete(params) {
            const result = await this.ctx.fetch(this.app.urls('sweep.id', params), {
                method: 'delete',
                dataType: 'json',
            });
            return result.data;
        }

    }

    return SweepService;
};
