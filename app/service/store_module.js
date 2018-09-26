'use strict';

module.exports = app => {
  class ModuleService extends app.Service {
    /**
     *
     * @param params
     * @return {Promise<void>}
     */
    async list(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('storeModule') + '/get', {
        dataType: 'json',
        method: 'get',
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
     * add
     * @param params
     * @return {{}}
     */
    async add_(params) {
      let url = this.app.urls('storeModule') + '/add';
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
     * 删除
     * @param params
     */
    async delete(params) {
      const result = await this.ctx.fetch(this.app.urls('storeModule') + '/delete', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }


    /**
     * update
     * @param params
     * @return {{}}
     */
    async update(params) {
      this.app.logger.info(params);
      const url = this.app.urls('storeModule') + '/update/status';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'get',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========updateStatus=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }

  }

  return ModuleService;
};
