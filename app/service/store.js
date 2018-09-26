'use strict';

module.exports = app => {
  class StoreService extends app.Service {
    /**
     * 查看 如果id为空是添加|id不为空是编辑
     * @param params
     * @return {{}}
     */
    async get(params) {
      this.app.logger.info(params);
      const url = this.app.urls('store') + '/get';
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
      const result = await this.ctx.fetch(this.app.urls('store') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================StoreService===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


    /**
     * close
     * @param params
     * @return {{}}
     */
    async close(params) {
      this.app.logger.info(params);
      const url = this.app.urls('store') + '/close';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========close=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }


    /**
     * unclose
     * @param params
     * @return {{}}
     */
    async open(params) {
      this.app.logger.info(params);
      const url = this.app.urls('store') + '/open';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========open=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
     * sort
     * @param params
     * @return {{}}
     */
    async sort(params) {
      this.app.logger.info(params);
      const url = this.app.urls('store') + '/sort';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========sort=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }


    /**
     * 设置为官方自营
     * @param params
     * @return {{}}
     */
    async official(params) {
      this.app.logger.info(params);
      const url = this.app.urls('store') + '/official';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========official=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }
  }

  return StoreService;
};
