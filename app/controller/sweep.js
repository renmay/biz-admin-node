'use strict';

module.exports = app => {
  class WaterController extends app.Controller {

    /**
         * 显示水费充值列表
         * @param ctx
         */
    async list() {
      // const params = this.ctx.request.query;
      // const data = await this.service.water.list(params);
      // this.app.logger.info('========waterController===========');
      // this.app.logger.info(data);
      await this.ctx.render('sweep/list.html');
      // await this.ctx.render('water/list.html', { data,params });
    }

  }

  return WaterController;
};
