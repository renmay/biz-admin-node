'use strict';

module.exports = app => {
    class productService extends app.Service {
        constructor(ctx) {
            super(ctx);
        }

        /**
         * 获取数据
         * @param params
         */
        async get(params) {
            const result = await this.ctx.fetch(this.app.urls('product.id', params), {
                method: 'get',
                dataType: 'json',
                data:{
                    language: params.language
                }
            });
            this.app.logger.info(result.data);
            if (result.data.code != 200){
                throw new Error(result.data.message ? result.data.message : 'error');
            }

            return result.data.data;
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
            const result = await this.ctx.fetch(this.app.urls('product'), {
                dataType: 'json',
                data: params
            });

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
        async edit(params) {
            let method = 'post';
            if (params.id && params.id != ''){
                method = 'put';
            }
            const result = await this.ctx.fetch(this.app.urls('product'), {
                method: method,
                dataType: 'json',
                data: params
            });
            return result.data;
        }

        async editLanguage(params){
            const result = await this.ctx.fetch(this.app.urls('productLanguage'), {
                method: 'post',
                dataType: 'json',
                data: params
            });
            return result.data;
        }

        /**
         * 删除
         * @param params
         */
        async delete(params) {
            const result = await this.ctx.fetch(this.app.urls('product.id', params), {
                method: 'delete',
                dataType: 'json'
            });
            return result.data;
        }

    }

    return productService;
};
