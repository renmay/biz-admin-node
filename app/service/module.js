'use strict';

module.exports = app => {
  class ModuleService extends app.Service {

    /**
     * 获取数据
     * @param params
     */
    async get(params) {
      const result = await this.ctx.fetch(this.app.urls('module.id', params), {
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
      const result = await this.ctx.fetch(this.app.urls('module'), {
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
     * 添加
     * @param params
     * @return {{}}
     */
    async add_(params) {
      const url = this.app.urls('module') + '/add';
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
     * 编辑
     * @param params
     * @return {{}}
     */
    async edit_(params) {
      const url = this.app.urls('module') + '/edit';
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
      const result = await this.ctx.fetch(this.app.urls('module') + '/delete', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }


    /**
     * 获取该行业的所有模块
     * @param params
     */
    async getModuleList(params) {
      this.app.logger.info(params);
      this.app.logger.info('获取该行业的所有模块');
      const result = await this.ctx.fetch(this.app.urls('getModuleList')+'/type', {
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
     * update
     * @param params
     * @return {{}}
     */
    async update(params) {
      this.app.logger.info(params);
      const url = this.app.urls('module') + '/action';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'get',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========系统模块开启与暂停=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }


  }

  return ModuleService;
};
