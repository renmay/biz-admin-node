'use strict';

module.exports = app => {
  class VersionController extends app.Controller {

    /**
       * 显示列表
       * @param ctx
       */
    async listMerchant() {
      const params = this.ctx.request.query;
      params.type = 1;
      const data = await this.service.version.list(params);
      this.app.logger.info('========versionMerchantController===========');
      await this.ctx.render('version/mcht/list.html', { data,params });
    }
    /**
       * 显示列表
       * @param ctx
       */
    async listUser() {
      const params = this.ctx.request.query;
      params.type = 2;
      const data = await this.service.version.list(params);
      this.app.logger.info('========versionUserController===========');
      await this.ctx.render('version/user/list.html', { data ,params});
    }

    /**
       * 查看版本更新信息
       * @param ctx
       * @return {Promise.<*>}
       */
    async viewMerchant() {
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.version.get(params);
        this.app.logger.info(data);
        await this.ctx.render('version/mcht/view.html', { data });
        return;
      }
      await this.ctx.render('version/mcht/view.html');
    }

    /**
     * 查看版本更新信息
     * @param ctx
     * @return {Promise.<*>}
     */
    async viewUser() {
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.version.get(params);
        this.app.logger.info(data);
        await this.ctx.render('version/user/view.html', { data });
        return;
      }
      await this.ctx.render('version/user/view.html');
    }

    /**
       * 编辑数据（渲染界面）
       * @param ctx
       * @return {Promise.<*>}
       */

    async editMerchant() {
      const params = this.ctx.request.query;
      const data = await this.service.version.latest(params);
      this.app.logger.info(data);
      await this.ctx.render('version/mcht/edit.html', { data ,params });
    }

    /**
     * 编辑数据（渲染界面）
     * @param ctx
     * @return {Promise.<*>}
     */

    async editUser() {
      const params = this.ctx.request.query;
      const data = await this.service.version.latest(params);
      this.app.logger.info(data);
      await this.ctx.render('version/user/edit.html', { data ,params });
    }

    /**
     * 编辑数据(post)
     * @param ctx
     * @private
     */

    async edit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      this.app.logger.info('params');
      const data = await this.service.version.edit_(params);
      this.ctx.body = data;
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
      const data = await this.service.version.delete(params);
      this.ctx.body = data;
    }
  }

  return VersionController;
};
