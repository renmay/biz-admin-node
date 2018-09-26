'use strict';

module.exports = app => {
  class BankcardService extends app.Service {

    /**
         * 获取数据
         * @param params
         */
    async get(params) {
      const result = await this.ctx.fetch(this.app.urls('bankcard.id', params), {
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
       * @returns {Promise<void>}
       */
    async list(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('bankcard') + '/list', {
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
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @returns {{}}
         */
    async edit_(params) {
      let mtd = 'post';
      if (params.id && params.id !== '') {
        mtd = 'put';
      }
      const result = await this.ctx.fetch(this.app.urls('bankcard'), {
        dataType: 'json',
        data: params,
        method: mtd,
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
      const result = await this.ctx.fetch(this.app.urls('bankcard') + '/delete', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

  }

  return BankcardService;
};
