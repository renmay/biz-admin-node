'use strict';

module.exports = app => {
  class StoreMuduleController extends app.Controller {

    /**
     * 显示列表（使用map）
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      this.app.logger.info(params)
      const data = await this.service.storeModule.list(params);
      this.app.logger.info('========storeModules===========');
      this.app.logger.info(data.length);
      data.map(item => {
        if (item.expireTime !== null) {
          app.logger.info(item);
          app.logger.info('========111');
          item.expireTime = item.expireTime.substr(0, 10);
        }
      });
      await this.ctx.render('storeModule/list.html', {data, params});
    }


    /**
     * 查看数据
     * @param ctx
     * @return {Promise.<*>}
     */
    async add() {
      const params = this.ctx.request.query;
      // params.type = 1;
      const moduleList = await this.service.module.getModuleList(params)
      this.app.logger.info(moduleList)
      this.app.logger.info('获取到了该行业所有的系统模块')
      this.app.logger.info(params)
      await this.ctx.render('storeModule/add.html', {moduleList, params});
    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async add_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.storeModule.add_(params);
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
      const data = await this.service.storeModule.delete(params);

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
      const data = await this.service.storeModule.update(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }


  }

  return StoreMuduleController;
};
