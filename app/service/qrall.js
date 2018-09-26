'use strict';

module.exports = app => {
  class QrallService extends app.Service {
    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async list(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('qr')+'/list/all', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================qrcode数据===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
         * 查看 如果id为空是添加|id不为空是编辑
         * @param params
         * @return {{}}
         */
    async get() {
      const url = this.app.urls('qr') + '/get';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        method: 'get',
      });
      this.app.logger.info(result.data);
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


    /**
         * 添加add
         * @param params
         * @return {{}}
         */
    async addqr(params) {
      this.app.logger.info(params);
      this.app.logger.info('////////////////////////////////////////////');
      this.app.logger.info(params);
      const url = this.app.urls('qr')+'/add';
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

  return QrallService;
};
