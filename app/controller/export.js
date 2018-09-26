'use strict';
module.exports = app => {
  class ExportController extends app.Controller {

    /**
     * 显示列表
     * @param ctx
     */
    async index() {
      await this.ctx.render('export/index.html');
    }


    /**
     * 导出总订单
     * @param ctx
     */
    async download() {
      const params = this.ctx.request.query;
      const fileName = '订单.xls';
      const res = await this.ctx.fetch(this.app.urls('export') + '/order', {
        streaming: true,
        data: params,
        method: 'get',
      });
      this.ctx.attachment(fileName);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.app.logger.info(res);
      this.ctx.body = res.res;
    }

    /**
     * 导出话费订单
     * @param ctx
     */
    async prepaid() {
      const params = this.ctx.request.query;
      let fileName = '话费订单.xls';
      const res = await this.ctx.fetch(this.app.urls('export') + '/prepaid', {
        streaming: true,
        data: params,
        method: 'get',
      });
      this.ctx.attachment(fileName);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.app.logger.info(res);
      this.ctx.body = res.res;
    }

    /**
     * 导出水费订单
     * @param ctx
     */
    async water() {
      const params = this.ctx.request.query;
      let fileName = '水费订单.xls';
      const res = await this.ctx.fetch(this.app.urls('export') + '/waterbill', {
        streaming: true,
        data: params,
        method: 'get',
      });
      this.ctx.attachment(fileName);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.app.logger.info(res);
      this.ctx.body = res.res;
    }


  }

  return ExportController;
};
