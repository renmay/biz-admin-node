'use strict';

module.exports = app => {
  class GoodsService extends app.Service {
    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async list(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('goods') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================商家商品service===============================');
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
      const url = this.app.urls('goods') + '/get';
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
         * 查看 如果id为空是添加|id不为空是编辑
         * @param params
         * @return {{}}
         */
    async putoff(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/get';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }


    /**
         * 上架
         * @param params
         * @return {{}}
         */
    async puton(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/puton';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========上架接口=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
         * 下架
         * @param params
         * @return {{}}
         */
    async putoff(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/putoff';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========下架接口=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }


    /**
         * 推荐
         * @param params
         * @return {{}}
         */
    async recommend(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/recommend';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========recommend=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }


    /**
         * 推荐
         * @param params
         * @return {{}}
         */
    async recommendCancel(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/recommend/cancel';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========recommendCancel=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
         * 添加修改 如果id为空是添加id不为空是编辑
         * @param params
         * @return {{}}
         */
    async edit_(params) {
      const url = this.app.urls('goods') + '/edit';
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
     * 是否热销
     * @param params
     * @return {{}}
     */
    async hot(params) {
      this.app.logger.info(params);
      const url = this.app.urls('goods') + '/hot';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========ishot=====');
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
      const url = this.app.urls('goods') + '/sort';
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

  }

  return GoodsService;
};
