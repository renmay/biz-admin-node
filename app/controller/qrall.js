'use strict';

module.exports = app => {
  class QrallController extends app.Controller {

    /**
     * 显示列表（qrall
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.qrall.list(params);
      this.app.logger.info('========qrList===========');
      await this.ctx.render('qrall/list.html', {data, params});
    }

    /**
     * 删除
     * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
     * @param ctx
     */
    async delete() {
      const params = this.ctx.request.body;
      const id = params.id;
      if (!id) {
        this.ctx.body = this.ctx.helper.res('请选择要删除的记录', 500);
        return;
      }

      // 判断是批量删除还是单个删除
      if (id instanceof Array) {
        if (id.length > 10) {
          this.ctx.body = this.ctx.helper.res('删除的条数不能为0且同时不能多于10条', 500);
          return;
        }
        params.id = id.join(',');
      }

      this.app.logger.info(params);
      const data = await this.service.qrall.delete(params);

      this.ctx.body = data;
    }


    /**
     * addqr页面
     * @param ctx
     * @return {Promise.<*>}
     */
    async addqr() {
      const count = await this.service.qrall.get();
      this.app.logger.info(count);
      await this.ctx.render('qrall/addqr.html', {count});
    }


    /**
     * addqr
     * @param ctx
     * @private
     */
    async addqr_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.qrall.addqr(params);
      this.ctx.body = data;
    }


  }

  return QrallController;
};
