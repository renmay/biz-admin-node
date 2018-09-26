'use strict';

module.exports = app => {
  class MerchantService extends app.Service {

    /**
     * 获取数据
     * @param params
     */
    async get(params) {
      const result = await this.ctx.fetch(this.app.urls('merchant.id', params), {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result.data);
      const data = result.data;

      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data.data;
    }


    /**
     * 获取列表
     * @param params
     * @return {{}}
     */
    async list(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('merchantAuth'), {
        dataType: 'json',
        data: params,
      });

      const data = result.data;

      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data.data;
    }


    /**
     * 删除
     * @param params
     */
    async delete(params) {
      const result = await this.ctx.fetch(this.app.urls('merchant.id', params), {
        method: 'delete',
        dataType: 'json',
      });
      return result.data;
    }

    async mobileIsExist(params) {

      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('merchantMobileIsExist'), {
        method: 'post',
        data: {
          params,
        },
        dataType: 'json',
      });

      const data = result.data;

      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data;
    }

    async usernameIsExist(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('merchantUsernameIsExist'), {
        method: 'post',
        data: {
          params,
        },
        dataType: 'json',
      });

      const data = result.data;

      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data;
    }

    async modifyPassword(params) {
      this.app.logger.info(params);
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('selleModifyPassword'), {
        method: 'post',
        data: params,
        dataType: 'json',
      });

      const data = result.data;

      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data;
    }

    async menu(params) {
      this.app.logger.info(params);
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(`${this.app.urls('merchantMenu')}/list`, {
        method: 'get',
        dataType: 'json',
      });

      const data = result.data;
      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data.data;
    }

    /**
     * 获取审核资料
     * @param params
     * @return {Promise<void>}
     */
    async audit(params) {
      const result = await this.ctx.fetch(this.app.urls('merchantAuth.id', params), {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result.data);
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data.data;
    }

    /**
     * 获取商家资料
     * @param params
     * @return {Promise<void>}
     */
    async person(params) {
      const result = await this.ctx.fetch(this.app.urls('merchant.id', params), {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result.data);
      const data = result.data;
      this.app.logger.info(data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data.data;
    }


    /**
     * 添加修改 如果id为空是添加id不为空是编辑
     * @param params
     * @return {{}}
     */
    async audit_(params) {
      const result = await this.ctx.fetch(this.app.urls('merchantAuth'), {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }


    /**
     * 单纯查看
     * @param params
     * @return {Promise<void>}
     */
    async auditt(params) {
      const result = await this.ctx.fetch(this.app.urls('merchantAuth.id', params), {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result);
      return result;
    }

    /**
     * 获取打款列表
     * @param params
     * @return {{}}
     */
    async getFireList(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('merchant') + '/fire/list', {
        dataType: 'json',
        data: params,
      });

      const data = result.data;

      if (data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return data.data;
    }

    /**
     * 打款
     * @param params
     * @return {{}}
     */
    async fire_(params) {
      const result = await this.ctx.fetch(this.app.urls('merchant') + '/fire', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

    /**
     * 打款
     * @param params
     * @return {{}}
     */
    async withDrawFire(params) {
      const result = await this.ctx.fetch(this.app.urls('merchant') + '/account/fire', {
        method: 'post',
        dataType: 'json',
        data: params,
      });
      return result.data;
    }

    /**
     * bind
     * @param params
     * @return {{}}
     */
    async bind(params) {
      this.app.logger.info(params);
      const url = this.app.urls('merchant') + '/bind';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========bind=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
     * bind
     * @param params
     * @return {{}}
     */
    async fee(params) {
      this.app.logger.info(params);
      const url = this.app.urls('merchant') + '/fee';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'GET',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========fee=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
     * bind
     * @param params
     * @return {{}}
     */
    async fee_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('merchant') + '/fee';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========fee_=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }

      return result.data;
    }

    /**
     * bindInfo
     * @param params
     * @return {{}}
     */
    async getBindInfo(params) {
      this.app.logger.info(params);
      const result = await this.ctx.fetch(this.app.urls('merchant') + '/bind/info', {
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
     * qrExport
     * @param params
     * @return {{}}
     */
    async qrExport(params) {
      this.app.logger.info(params);
      const url = this.app.urls('merchant') + '/qr/export';
      const result = await this.ctx.fetch(url, {
        dataType: 'json',
        data: params,
        method: 'POST',
      });
      this.app.logger.info(result.data);
      this.app.logger.info('===========qrExport=====');
      const data = result.data;
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return result.data;
    }
  }

  return MerchantService;
};
