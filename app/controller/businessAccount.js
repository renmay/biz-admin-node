'use strict';

module.exports = app => {
  class BusinessAccountController extends app.Controller {

    /**
         * 显示列表account
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.businessAccount.list(params);
      this.app.logger.info('========businessAccounttController===========');
      this.app.logger.info(data);
      await this.ctx.render('businessAccount/list.html', { data,params });
    }

  }

  return BusinessAccountController;
};
