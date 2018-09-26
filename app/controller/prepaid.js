'use strict';
module.exports = app => {
  class PrepaidController extends app.Controller {
    /**
         * 显示话费充值列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.prepaid.list(params);
      await this.ctx.render('prepaid/list.html', { data, params });
    }

    /**
       * 查看prepaid订单
       * @param ctx
       * @return {Promise.<*>}
       */
    async edit() {
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.prepaid.get(params);
        this.app.logger.info(data);
        await this.ctx.render('prepaid/edit.html', { data });
        return;
      }
      await this.ctx.render('prepaid/edit.html');
    }

  }

  return PrepaidController;
};
