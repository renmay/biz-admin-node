'use strict';

module.exports = app => {
  class BannerService extends app.Service {

    /**
             * 获取数据
             * @param params
             */
    async get(params) {
      this.app.logger.info(params);
      const result = await this.ctx.fetch(this.app.urls('banner'), {
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
      const result = await this.ctx.fetch(this.app.urls('banner') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================banner============================');
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
      this.app.logger.info('////////////////////////////////////////////');
      this.app.logger.info(params);
      let url = this.app.urls('banner') + '/add';
      if (params.id && params.id !== '') {

        url = this.app.urls('banner') + '/edit';
      }

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
      const result = await this.ctx.fetch(this.app.urls('banner') + '/delete', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

  }

  return BannerService;
};
