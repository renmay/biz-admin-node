'use strict';

module.exports = app => {
  class ThirdConfigService extends app.Service {
    /**
     *
     * 微信
     * @return {Promise<void>}
     */
    async weixin(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/weixin', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取微信配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 编辑微信配置
     * @param params
     * @return {{}}
     */
    async weixinEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/weixin';
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
     *
     * 微信app
     * @return {Promise<void>}
     */
    async weixinApp(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/weixin/app', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取微信app配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 编辑微信app配置
     * @param params
     * @return {{}}
     */
    async weixinAppEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/weixin/app';
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
     *
     * 阿里
     * @return {Promise<void>}
     */
    async alipay(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/alipay', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取阿里配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }
    /**
     * 编辑阿里配置
     * @param params
     * @return {{}}
     */
    async alipayEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/alipay';
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
     *
     * 银联
     * @return {Promise<void>}
     */
    async unionPay(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/union/pay', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取银联配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 编辑银联配置
     * @param params
     * @return {{}}
     */
    async unionPayEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/union/pay';
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
     *
     * 银联app
     * @return {Promise<void>}
     */
    async unionAppPay(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/union/app/pay', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取银联app配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
     * 编辑银联app配置
     * @param params
     * @return {{}}
     */
    async unionAppPayEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/union/app/pay';
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
     *
     * 银联打款
     * @return {Promise<void>}
     */
    async unionCorpPay(params) {
      /**
       * 请求后台接口
       */
      const result = await this.ctx.fetch(this.app.urls('thirdConfig') + '/union/corp/pay', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('==============================获取银联打款配置============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }
    /**
     * 编辑银联打款配置
     * @param params
     * @return {{}}
     */
    async unionCorpPayEdit_(params) {
      this.app.logger.info(params);
      const url = this.app.urls('thirdConfig') + '/union/corp/pay';
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

  }

  return ThirdConfigService;
};
