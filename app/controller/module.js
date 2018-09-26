'use strict';
const rule = {
  moduleId: {type: 'string', required: true, allowEmpty: false},
  name: {type: 'string', required: true, allowEmpty: false},
  jingle: {type: 'string', required: true, allowEmpty: false},
  price: {type: 'bigdecimal', required: true, allowEmpty: false},
  promotionPrice: {type: 'bigdecimal', required: true, allowEmpty: false},
  marketPrice: {type: 'bigdecimal', required: true, allowEmpty: false},
  serial: {type: 'string', required: true, allowEmpty: false},
  spec: {type: 'string', required: true, allowEmpty: false},
  storage: {type: 'integer', required: true, allowEmpty: false},
  createTime: {type: 'date', required: true, allowEmpty: false},
  specValue: {type: 'string', required: true, allowEmpty: false},
  alarm: {type: 'integer', required: true, allowEmpty: false},
  sku: {type: 'string', required: true, allowEmpty: false},
  url: {type: 'string', required: true, allowEmpty: false},
  images: {type: 'string', required: true, allowEmpty: false},
};

module.exports = app => {
  class ModuleController extends app.Controller {

    /**
     * 显示列表
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      // params.moduleType = this.ctx.session.member.type;
      this.app.logger.info(params);
      const data = await this.service.module.list(params);
      this.app.logger.info(data);
      await this.ctx.render('module/list.html', {data});
    }


    /**
     * 删除
     * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
     * @param ctx
     */
    async delete() {
      const params = this.ctx.request.body;
      const id = params.id;
      // 以下两句是传过去的参数moduleType，ids
      // params.moduleType = this.ctx.session.member.type;
      params.ids = id;

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
      const data = await this.service.module.delete(params);

      this.ctx.body = data;
    }

    /**
     * add
     * @param ctx
     * @return {Promise.<*>}
     */
    async add() {
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.module.get({id});
        this.app.logger.info(data);

        // 行业
        const idst = data.industry;
        this.app.logger.info(idst);

        for (let i = 0; i < 7; i++) {
          if (idst.indexOf(i) >= 0) {
            data['industry' + i] = true;
          }
        }
        this.app.logger.info(data);
        await this.ctx.render('module/add.html', {data});
        return;
      }
      await this.ctx.render('module/add.html');

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
        const data = await this.service.module.get({id});
        this.app.logger.info(data);

        // 行业
        const idst = data.industry;
        this.app.logger.info(idst);

        for (let i = 0; i < 7; i++) {
          if (idst.indexOf(i) >= 0) {
            data['industry' + i] = true;
          }
        }
        this.app.logger.info(data);
        await this.ctx.render('module/edit.html', {data});
        return;
      }
      await this.ctx.render('module/edit.html');

    }


    /**
     * add
     * @param ctx
     * @private
     */

    async add_() {
      // this.validate(rule);
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      this.app.logger.info(params);
      const data = await this.service.module.add_(params);
      this.ctx.body = data;
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */

    async edit_() {
      // this.validate(rule);
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      this.app.logger.info(params);
      const data = await this.service.module.edit_(params);
      this.ctx.body = data;
    }

    /**
     * 更新
     * @param ctx
     * @private
     */
    async update() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.service.module.update(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }

  }

  return ModuleController;
};
