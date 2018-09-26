'use strict';

module.exports = app => {
  class VersionService extends app.Service {
    /**
     * 获取数据
     * @param params
     */
    async get(params) {
      const result = await this.ctx.fetch(this.app.urls('version') + '/get', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result.data);
      this.app.logger.info('version的get方法');
      const data = result.data;
      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 获取数据
     * @param params
     */
    async latest(params) {
      const result = await this.ctx.fetch(this.app.urls('version') + '/latest', {
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
      const result = await this.ctx.fetch(this.app.urls('version') + '/list', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================visionListService============================');
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
      this.app.logger.info('version提交编辑/添加数据');
      const url = this.app.urls('version') + '/add';
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
      const result = await this.ctx.fetch(this.app.urls('version') + '/delete', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

  }

  return VersionService;
};
