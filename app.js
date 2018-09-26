// app.js
module.exports = app => {


    class BaseService extends app.Service {
        async request(name, params, path) {
            let url = this.app.urls(name);

            if (path){
                url = url + '/' + path;
            }

            const result = await this.ctx.fetch(url, {
                method: 'get',
                dataType: 'json',
                data: params
            });
            this.app.logger.info(result.data);
            let data = result.data;
            if (data.code != 200) {
                throw new Error(data.message ? data.message : 'error');
            }

            return data.data;
        }

        async post(name, params, path) {
            let url = this.app.urls(name);

            if (path){
                url = url + '/' + path;
            }

            const result = await this.ctx.fetch(url, {
                method: 'post',
                dataType: 'json',
                data: params
            });
            this.app.logger.info(result.data);
            let data = result.data;
            if (data.code != 200) {
                throw new Error(data.message ? data.message : 'error');
            }

            return data.data;
        }
    }

    /**
     * 定义base controller
     */
    class BaseController extends app.Controller {
        /**
         * 获取用户信息
         * @returns {*}
         */
        get member() {
            return this.ctx.session.member;
        }

        /**
         * 成功
         * @param data
         */
        success(data) {
            this.ctx.body = {
                code: 200,
                data,
            };
        }

        /**
         * 失败
         * @param code
         * @param message
         */
        fail(code = 500, message = 'fail'){
            this.ctx.body = {
                code,
                message
            }
        }

    }
    app.Controller = BaseController;
    app.Service = BaseService;
}