'use strict';

module.exports = app => {
  class MoneyService extends app.Service {
    /**
       *
       * @param params
       * @returns {Promise<void>}
       */
    async list(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('money'), {
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
     * exportMoney
     * @param params
     * @return {{}}
     */
    async exportMoney(params) {
      this.app.logger.info(params);
      const url = this.app.urls('money') + '/export';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========exportMoney=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

  }

  return MoneyService;
};
