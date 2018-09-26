'use strict';

module.exports = app => {
  class AnnualController extends app.Controller {

    /**
         * 显示列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.annual.list(params);
      this.app.logger.info('========annualList===========');
      this.app.logger.info(data);
      await this.ctx.render('annual/list.html', { data,params });
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
      const data = await this.service.annual.delete(params);

      this.ctx.body = data;
    }
    /**
         * faka
         * @param ctx
         * @private
         */
    async faka() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.annual.faka(params);
      this.app.logger.info(data);
      this.ctx.body = data;

    }

  }

  return AnnualController;
};
