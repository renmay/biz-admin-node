'use strict';
module.exports = app => {
  class orderController extends app.Controller {

    /**
     * 显示水费充值列表
     * @param ctx
     */
    async water() {
      const params = this.ctx.request.query;
      const data = await this.service.water.list(params);
      this.app.logger.info('========water===========');
      this.app.logger.info(data);
      await this.ctx.render('order/water.html', {data, params});
    }

    /**
     * 显示手机充值列表
     * @param ctx
     */
    async prepaid() {
      const params = this.ctx.request.query;
      const data = await this.service.prepaid.list(params);
      this.app.logger.info('========prepaid===========');
      this.app.logger.info(data);
      await this.ctx.render('order/prepaid.html', {data, params});
    }


    /**
     * 显示列表
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      this.app.logger.info();
      this.app.logger.info('========商家订单列表===========');
      const data = await this.service.order.list(params);
      await this.ctx.render('order/list.html', {data, params});
    }


    /**
     * 显示列表
     * @param ctx
     */

    async hotel() {
      const params = this.ctx.request.query;
      params.type = 1;
      const data = await this.service.order.list(params);
      await this.ctx.render('order/hotel.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async restaurant() {
      const params = this.ctx.request.query;
      params.type = 2;
      this.app.logger.info(params);
      this.app.logger.info('===========type=========');
      const data = await this.service.order.list(params);
      await this.ctx.render('order/restaurant.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async scenic() {
      const params = this.ctx.request.query;
      params.type = 4;
      this.app.logger.info(params);
      const data = await this.service.order.list(params);
      await this.ctx.render('order/scenic.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async entertainment() {
      const params = this.ctx.request.query;
      params.type = 3;
      const data = await this.service.order.list(params);
      this.app.logger.info(data);
      await this.ctx.render('order/entertainment.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async speciality() {
      const params = this.ctx.request.query;
      params.type = 5;
      this.app.logger.info(params);
      const data = await this.service.order.list(params);
      await this.ctx.render('order/speciality.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async travel() {
      const params = this.ctx.request.query;
      params.type = 6;
      this.app.logger.info(params);
      const data = await this.service.order.list(params);
      await this.ctx.render('order/travel.html', {data, params});
    }


    /**
     * 查看订单
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
        const data = await this.service.order.get(params);
        this.app.logger.info(data);
        await this.ctx.render('order/edit.html', {data});
        return;
      }
      await this.ctx.render('order/edit.html');
    }

  }

  return orderController;
};
