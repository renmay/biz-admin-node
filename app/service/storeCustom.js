'use strict';

module.exports = app => {
  class StoreCustomService extends app.Service {
    /**
     * 获取数据
     * @param params
     */
    async get(params) {
      this.app.logger.info(params);
      const result = await this.ctx.fetch(this.app.urls('storeCustom')+'/get', {
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
      const result = await this.ctx.fetch(this.app.urls('storeCustom')+'/get', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================StoreCustomService============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 添加修改 如果id为空是添加|id不为空是编辑
     * @param params
     * @return {{}}
     */
    async edit_(params) {
      this.app.logger.info(params);
      this.app.logger.info(params);
      const url = this.app.urls('storeCustom') + '/edit';
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


  }

  return StoreCustomService;
};
