'use strict';
module.exports = app => {
  class AnnualService extends app.Service {

    /**
         * 获取数据
         * @param params
         */
    async get(params) {
      const result = await this.ctx.fetch(this.app.urls('annual.id', params), {
        method: 'get',
        dataType: 'json',
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
      const result = await this.ctx.fetch(this.app.urls('annual') + '/list', {
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
         * 上架
         * @param params
         * @return {{}}
         */
    async faka(params) {
      this.app.logger.info(params);
      const url = this.app.urls('annual') + '/faka';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========faka=====');
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
      const result = await this.ctx.fetch(this.app.urls('annual.id', params), {
        method: 'delete',
        dataType: 'json',
      });
      return result.data;
    }

  }

  return AnnualService;
};
