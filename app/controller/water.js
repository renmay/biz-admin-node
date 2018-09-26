'use strict';
module.exports = app => {
  class WaterController extends app.Controller {
    /**
         * 显示水费充值列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.water.list(params);
      await this.ctx.render('water/list.html', { data, params });
    }

    /**
       * 查看water订单
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
        const data = await this.service.water.get(params);
        this.app.logger.info(data);
        await this.ctx.render('water/edit.html', { data });
        return;
      }
      await this.ctx.render('water/edit.html');
    }

  }

  return WaterController;
};
