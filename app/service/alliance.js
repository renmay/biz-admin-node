'use strict';

module.exports = app => {
  class AllianceService extends app.Service {

    /**
         * 获取数据
         * @param params
         */
    async get(params) {
      this.app.logger.info(params);
      const result = await this.ctx.fetch(this.app.urls('alliance'), {
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
      const result = await this.ctx.fetch(this.app.urls('alliance') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================商家联盟service===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


  }

  return AllianceService;
};
