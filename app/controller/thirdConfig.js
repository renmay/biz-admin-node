'use strict';

module.exports = app => {
  class thirdConfigController extends app.Controller {

    /**
     * 微信显示配置信息
     * @param ctx
     */
    async weixin() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.weixin(params);
      this.app.logger.info('=======weixinConfigController===========');
      await this.ctx.render('thirdConfig/weixin/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async weixinEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.weixin(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/weixin/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async weixinEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.weixinEdit_(params);
      this.ctx.body = data;
    }

    /**
     * 微信显示配置信息
     * @param ctx
     */
    async weixinApp() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.weixinApp(params);
      this.app.logger.info('=======weixinAppConfigController===========');
      await this.ctx.render('thirdConfig/weixinApp/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async weixinAppEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.weixinApp(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/weixinApp/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */

    async weixinAppEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.weixinAppEdit_(params);
      this.ctx.body = data;
    }


    /**
     * 阿里
     * @param ctx
     */
    async alipay() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.alipay(params);
      this.app.logger.info('=======ali===========');
      await this.ctx.render('thirdConfig/alipay/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async alipayEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.alipay(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/alipay/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */

    async alipayEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.alipayEdit_(params);
      this.ctx.body = data;
    }

    /**
     * 银联打款
     * @param ctx
     */
    async unionPay() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionPay(params);
      this.app.logger.info('=======ali===========');
      await this.ctx.render('thirdConfig/unionPay/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async unionPayEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionPay(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/unionPay/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async unionPayEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.unionPayEdit_(params);
      this.ctx.body = data;
    }


    /**
     * 银联app
     * @param ctx
     */
    async unionAppPay() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionAppPay(params);
      this.app.logger.info('=======ali===========');
      await this.ctx.render('thirdConfig/unionAppPay/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async unionAppPayEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionAppPay(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/unionAppPay/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async unionAppPayEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.unionAppPayEdit_(params);
      this.ctx.body = data;
    }

    /**
     * 银联集团打款
     * @param ctx
     */
    async unionCorpPay() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionCorpPay(params);
      this.app.logger.info('=======unionCorpPay===========');
      await this.ctx.render('thirdConfig/unionCorpPay/index.html', {data});
    }

    /**
     * 编辑数据界面
     * @param ctx
     * @return {Promise.<*>}
     */
    async unionCorpPayEdit() {
      const params = this.ctx.request.query;
      const data = await this.service.thirdConfig.unionCorpPay(params);
      this.app.logger.info('data');
      await this.ctx.render('thirdConfig/unionCorpPay/edit.html', {data});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async unionCorpPayEdit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.thirdConfig.unionCorpPayEdit_(params);
      this.ctx.body = data;
    }
  }

  return thirdConfigController;
};
