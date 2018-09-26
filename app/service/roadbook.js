'use strict';

module.exports = app => {
  return class RoadbookService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    /**
         * 获取数据
         * @param params
         */
    async get(params) {
      const url = this.app.urls('roadbook');
      this.app.logger.info(url);
      const result = await this.ctx.fetch(url, {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result.data);
      const data = result.data;

      if (data.code != 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data.data;
    }


    /**
     *
     * @param 获取列表
     * @return {Promise<void>}
     */
    async list(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('roadbook')+'/list', {
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
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @return {{}}
         */
    async edit(params) {
      let url = this.app.urls('roadbook') + '/add';
      if (params.id && params.id !== '') {
        url = this.app.urls('roadbook') + '/edit';
      }

      this.app.logger.info(url);
      const result = await this.ctx.fetch(url, {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

    /**
     * 删除
     * @param params
     */
    async delete(params) {
      const result = await this.ctx.fetch(this.app.urls('roadbook') + '/delete', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }




  };

};
