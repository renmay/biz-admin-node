'use strict';

module.exports = app => {
  class WaterService extends app.Service {

    /**
         * 获取数据
         * @param params
         */
    async get(params) {
      this.app.logger.info(params);
      const result = await this.ctx.fetch(this.app.urls('getOrder') + '/waterbill', {
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

    /**·
       *
       * @param params
       * @return {Promise<void>}
       */
    async list(params) {
      /**
           * 请求后台接口
           */
      const result = await this.ctx.fetch(this.app.urls('water'), {
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
  }

  return WaterService;
};
