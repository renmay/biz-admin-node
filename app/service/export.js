'use strict';

module.exports = app => {
  class DownloaderService extends app.Service {
    /**
         * close
         * @param params
         * @return {{}}
         */
    async export(params) {
      this.app.logger.info(params);
      const url = this.app.urls('export');
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========export=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

  }

  return DownloaderService;
};
