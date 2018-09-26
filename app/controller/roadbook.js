'use strict';

module.exports = app => {
  return class RoadbookController extends app.Controller {

    /**
		 * 显示列表
		 * @param ctx
		 */
    async list(ctx) {
		    const params = this.ctx.request.query;
		    this.app.logger.info(params);
		    const data = await this.service.roadbook.list(params);
		    await this.ctx.render('roadbook/list.html', { data, params });
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
      const data = await this.service.roadbook.delete(params);
      this.ctx.body = data;
    }

    async edit(ctx) {
		    const params = this.ctx.request.query;
		    const id = params.id;
		    if (id == '') {
		        return this.ctx.redirect('/error');
		    }
		    if (id) {
		        const data = await this.service.roadbook.get({ id });
		        await this.ctx.render('roadbook/edit.html', { data, params });
		        return;
		    }
		    await this.ctx.render('roadbook/edit.html', { params });
    }

    /**
		 * 编辑数据
		 * @param ctx
		 * @private
		 */
    async edit_(ctx) {
		    this.ctx.validate({
        title: { type: 'string', required: true, allowEmpty: false },
        author: { type: 'string', required: true, allowEmpty: false },
        content: { type: 'string', required: true, allowEmpty: false },
        digest: { type: 'string', required: true, allowEmpty: false },
      });
		    const params = this.ctx.request.body;
		    const data = await this.service.roadbook.edit(params);
		    this.ctx.body = data;
    }

  };

};
