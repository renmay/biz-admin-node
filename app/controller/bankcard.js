'use strict';

module.exports = app => {
  class BankcardController extends app.Controller {

    /**
         * 显示列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.service.bankcard.list(params);
      this.app.logger.info(data);
      await this.ctx.render('bankcard/list.html', { data });
    }


    /**
         * 删除
         * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
         * @param ctx
         */
    async delete() {
      const params = this.ctx.request.body;

      const id = params.id;
      params.bankcardType = this.ctx.session.member.type;

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
      const data = await this.service.bankcard.delete(params);

      this.ctx.body = data;
    }

    /**
         * 编辑数据
         * @param ctx
         * @returns {Promise.<*>}
         */
    async edit() {
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.bankcard.get({ id });

        this.app.logger.info(data);
        await this.ctx.render('bankcard/edit.html', { data });
        return;
      }
      await this.ctx.render('bankcard/edit.html');

    }

    /**
         * 编辑数据
         * @param ctx
         * @private
         */

    async edit_() {
      const params = this.ctx.request.body;
      params.bankcardType = this.ctx.session.member.type;
      params.storeId = this.ctx.session.member.storeId;

      this.app.logger.info(params);
      const data = await this.service.bankcard.edit_(params);
      this.ctx.body = data;
    }

  }

  return BankcardController;
};
