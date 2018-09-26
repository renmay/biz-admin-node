'use strict';

module.exports = app => {
  class QrusedService extends app.Service {
    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async list(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('qr') + '/list/used', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==========================================================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }
  }

  return QrusedService;
};
