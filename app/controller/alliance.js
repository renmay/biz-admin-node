'use strict';

module.exports = app => {
  class AllianceController extends app.Controller {

    /**
         * 显示列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.alliance.list(params);
      this.app.logger.info('========merchantAllianceliebiao===========');
      await this.ctx.render('alliance/list.html', { data });
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
      const data = await this.service.alliance.delete(params);

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

      // 获取年级 科目等接口的数据
      const gradeList = await this.service.grade.list();
      const courseList = await this.service.course.list();
      if (id) {
        const data = await this.service.alliance.get(params);
        this.app.logger.info(data);
        await this.ctx.render('alliance/edit.html', { data, gradeList, courseList });
        return;
      }
      await this.ctx.render('alliance/edit.html', { gradeList, courseList });
    }


    /**
         * 编辑数据
         * @param ctx
         * @private
         */

    async edit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.alliance.edit_(params);
      this.ctx.body = data;
    }

  }

  return AllianceController;
};
