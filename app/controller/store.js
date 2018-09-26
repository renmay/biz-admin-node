'use strict';

module.exports = app => {
  class StoreController extends app.Controller {

    /**
     * 显示列表
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.store.list(params);
      this.app.logger.info('========StoreController===========');
      this.app.logger.info(data);
      await this.ctx.render('store/list.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async hotel() {
      const params = this.ctx.request.query;
      params.type = 1;
      this.app.logger.info(params);
      this.app.logger.info('============productType============');
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/hotel.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async restaurant() {
      const params = this.ctx.request.query;
      params.type = 2;
      this.app.logger.info(params);
      this.app.logger.info('===========restaurant=========');
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/restaurant.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async scenic() {
      const params = this.ctx.request.query;
      params.type = 4;
      this.app.logger.info(params);
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/scenic.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async entertainment() {
      const params = this.ctx.request.query;
      params.type = 3;
      this.app.logger.info(params);
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/entertainment.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async travel() {
      const params = this.ctx.request.query;
      params.type = 6;
      this.app.logger.info(params);
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/travel.html', {data, params});
    }


    /**
     * 显示列表
     * @param ctx
     */

    async speciality() {
      const params = this.ctx.request.query;
      params.type = 5;
      this.app.logger.info(params);
      const data = await this.service.store.list(params);
      this.app.logger.info(data);
      await this.ctx.render('store/speciality.html', {data, params});
    }


    /**
     * 设置为官方自营
     * @param ctx
     * @private
     */
    async isOfficial() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      params.isOfficial = true;
      const data = await this.service.store.official(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }

    async unOfficial() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      params.isOfficial = false;
      const data = await this.service.store.official(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }

    // 高端定制界面
    async customList() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      params.isOfficial = false;
      const data = await this.service.store.get(params);
      this.app.logger.info(data);
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
      const data = await this.service.store.delete(params);

      this.ctx.body = data;
    }

    /**
     * 关停
     * @param ctx
     * @private
     */
    async close() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.store.close(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }

    /**
     * 下架
     * @param ctx
     * @private
     */
    async open() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.store.open(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }


    /**
     * 排序
     * @param ctx
     * @private
     */
    async sort() {
      const url = this.ctx.request.url;
      const params = this.ctx.request.query;
      const id = params.id;
      if (id === '') {
        return this.redirect('/error');
      }
      if (id) {
        const data = await this.service.store.get({id});
        this.app.logger.info(data);
        await this.ctx.render('store/sort.html', {data, url});
        return;
      }
      await this.ctx.render('store/sort.html');
    }


    /**
     * 排序
     * @param ctx
     * @private
     */
    async sort_() {
      const params = this.ctx.request.body;
      const url = params.url;
      this.app.logger.info(params);
      const data = await this.service.store.sort(params);
      this.app.logger.info(data);
      this.ctx.body = "<div style='padding:20% 0 0 32%;font-size:22px;color:rgb(28,43,55);'>修改成功，关闭弹窗返回列表页！</div>";
    }

    /**
     * 查看数据
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
        const data = await this.service.store.get({id});
        this.app.logger.info(data);
        await this.ctx.render('store/edit.html', {data});
        return;
      }
      await this.ctx.render('store/edit.html');

    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */
    async edit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.store.edit_(params);
      this.ctx.body = data;
    }

  }

  return StoreController;
};
