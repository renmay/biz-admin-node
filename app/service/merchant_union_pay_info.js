
'use strict';

module.exports = app => {
  class MerchantUnionPayInfoService extends app.Service {
    /**
     *
     * @param params
     * @return {Promise<void>}
     */
    async list(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('merchantUnionPayInfo') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
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
    async get(params) {
      this.app.logger.info(params);
      const url = this.app.urls('merchantUnionPayInfo') + '/get';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
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
     * 添加修改 如果id为空是添加|id不为空是编辑
     * @param params
     * @return {{}}
     */
    async edit_(params) {
      this.app.logger.info(params);
      let url = this.app.urls('merchantUnionPayInfo') + '/add';
      if (params.id && params.id !== '') {
        url = this.app.urls('merchantUnionPayInfo') + '/edit';
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
      this.app.logger.info(params.id);
      const result = await this.ctx.fetch(this.app.urls('merchantUnionPayInfo') + '/delete', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }


  }

  return MerchantUnionPayInfoService;
};
