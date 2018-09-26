'use strict';

module.exports = app => {
    class GoodsComboService extends app.Service {
        constructor(ctx) {
            super(ctx);
        }

        /**
         * 获取数据
         * @param params
         */
        * get(params) {
            const result = yield this.ctx.curl(this.app.urls('goodsCombo.id', params), {
                method: 'get',
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
         * 获取列表
         * @param params
         * @returns {{}}
         */
        * list(params) {
            /**
             * 请求后台接口
             */
            const result = yield this.ctx.curl(this.app.urls('goodsCombo'), {
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
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @returns {{}}
         */
        * edit(params) {
            let method = 'post';
            if (params.id && params.id != ''){
                method = 'put';
            }
            const result = yield this.ctx.curl(this.app.urls('goodsCombo'), {
                method: method,
                dataType: 'json',
                data: params
            });
            return result.data;
        }

        * editBaseInfo(params) {
            let method = 'post';
            if (params.id && params.id != ''){
                method = 'put';
            }
            const result = yield this.ctx.curl(`${this.app.urls('goodsCombo')}/base/info`, {
                method: method,
                dataType: 'json',
                data: params
            });
            return result.data;
        }

        /**
         * 删除
         * @param params
         */
        * delete(params) {
            const result = yield this.ctx.curl(this.app.urls('goodsCombo.id', params), {
                method: 'delete',
                dataType: 'json'
            });
            return result.data;
        }

    }

    return GoodsComboService;
};
