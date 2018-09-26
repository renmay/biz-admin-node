'use strict';

module.exports = app => {
  class GoodsController extends app.Controller {

    /**
     * 显示列表（goods
     * @param ctx
     */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.goods.list(params);
      this.app.logger.info('========merchantGoods列表===========');
      await this.ctx.render('goods/list.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async hotel() {
      const params = this.ctx.request.query;
      params.productType = 1;
      this.app.logger.info(params);
      this.app.logger.info("============productType============");
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/hotel.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async restaurant() {
      const params = this.ctx.request.query;
      params.productType = 2;
      this.app.logger.info(params);
      this.app.logger.info('===========restaurant=========');
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/restaurant.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async scenic() {
      const params = this.ctx.request.query;
      params.productType = 4;
      this.app.logger.info(params);
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/scenic.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */
    async entertainment() {
      const params = this.ctx.request.query;
      params.productType = 3;
      this.app.logger.info(params);
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/entertainment.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async speciality() {
      const params = this.ctx.request.query;
      params.productType = 5;
      this.app.logger.info(params);
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/speciality.html', {data, params});
    }

    /**
     * 显示列表
     * @param ctx
     */

    async travel() {
      const params = this.ctx.request.query;
      params.productType = 6;
      this.app.logger.info(params);
      const data = await this.service.goods.list(params);
      this.app.logger.info(data);
      await this.ctx.render('goods/travel.html', {data, params});
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
      const data = await this.service.goods.delete(params);

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
        const data = await this.service.goods.get(params);
        // const images = data.images.split(',');
        // data.images = images;
        // for (let i = 0; i < 4 - images; i++) {
        //   images.push('');
        // }
        this.app.logger.info(data);
        this.app.logger.info('====data');
        await this.ctx.render('goods/edit.html', {data});
        return;
      }
      await this.ctx.render('goods/edit.html');
    }


    /**
     * 编辑数据
     * @param ctx
     * @private
     */

    async edit_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.goods.edit_(params);
      this.ctx.body = data;
    }


    /**
     * 上架
     * @param ctx
     * @private
     */
    async puton() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.goods.puton(params);
      this.app.logger.info(data);
      this.ctx.body = data;

    }

    /**
     * 编辑数据
     * @param ctx
     * @private
     */

    async putoff() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.goods.putoff(params);
      this.ctx.body = data;
    }

    /**
     * recommend
     * @param ctx
     * @private
     */
    async recommend() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.goods.recommend(params);
      this.app.logger.info(data);
      this.ctx.body = data;

    }

    /**
     * recommendCancel
     * @param ctx
     * @private
     */
    async recommendCancel() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.goods.recommendCancel(params);
      this.app.logger.info(data);
      this.ctx.body = data;

    }


    /**
     * hot
     * @param ctx
     * @private
     */
    async hot() {
      const params = this.ctx.request.body;
      params.hot = true;
      this.app.logger.info(params);
      const data = await this.service.goods.hot(params);
      this.app.logger.info(data);
      this.ctx.body = data;

    }

    /**
     * isNotHot
     * @param ctx
     * @private
     */
    async isNotHot() {
      const params = this.ctx.request.body;
      params.hot = false;
      this.app.logger.info(params);
      const data = await this.service.goods.hot(params);
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
        const data = await this.service.goods.get({id});
        this.app.logger.info(data);
        await this.ctx.render('goods/sort.html', {data, url});
        return;
      }
      await this.ctx.render('goods/sort.html');
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
      const data = await this.service.goods.sort(params);
      this.app.logger.info(data);
      this.ctx.body = "<div style='padding:20% 0 0 32%;font-size:22px;color:rgb(28,43,55);'>修改成功，关闭弹窗返回列表页！</div>";
    }


  }

  return GoodsController;
};
