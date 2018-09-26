'use strict';

module.exports = app => {
  class MoneyController extends app.Controller {

    /**
     * 显示提现列表
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.money.list(params);
      await this.ctx.render('money/list.html', { data, params });
    }


    // 提现
    async exportMoney() {
      const params = this.ctx.request.query;
      const fileName = '提现.xls';
      const res = await this.ctx.fetch(this.app.urls('money') + '/export', {
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

  return MoneyController;
};
