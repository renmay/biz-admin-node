'use strict';

module.exports = app => {
  class AccountController extends app.Controller {

    /**
         * 显示界面
         * @param ctx
         */
    async list() {
      const id = this.ctx.session.member.id;
      this.app.logger.info(id);
      if (id === '1') {
        const params = this.ctx.request.query;
        const data = await this.service.account.list(params);
        this.app.logger.info('========account===========');
        await this.ctx.render('account/list.html', { data,params });
        return;
      }
      const data = await this.service.account.get({ "id":id });
      this.app.logger.info(data);
      await this.ctx.render('account/edit.html', { data,params });
      return;
    }

    /**
         * 删除
         * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
         * @param ctx
         */
    async delete() {
      const params = this.ctx.request.body;

      const id = params.id;
      params.schoolgradeType = this.ctx.session.member.type;

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
      const data = await this.service.account.delete(params);

      this.ctx.body = data;
    }

    /**
         * 编辑数据
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
        const data = await this.service.account.get(params);
        this.app.logger.info(data);
        await this.ctx.render('account/edit.html', { data });
        return;
      }
      await this.ctx.render('account/edit.html');
    }


    /**
         * 编辑数据
         * @param ctx
         * @private
         */

    async edit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.account.edit_(params);
      this.ctx.body = data;
    }


    /**
         * 启用管理员
         * @param ctx
         * @private
         */
    async enable() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.account.enable(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }

    /**
         * 禁用管理员
         * @param ctx
         * @private
         */
    async disable() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.account.disable(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }


    /**
         * 显示修改密码界面
         * @param ctx
         */
    async showModifyPasswordPage() {
      await this.ctx.render('account/modify_password.html');
    }

    /**
         * 修改密码
         * @param ctx
         * @private
         */
    async modifyPassword() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.account.modifyPassword(params);
      this.app.logger.info(data);
      // this.ctx.body = data;
      this.ctx.body = '<div></div>';
    }


  }

  return AccountController;
};
