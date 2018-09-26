'use strict';
const rule = {
  linkName: { type: 'string', required: true, allowEmpty: false },
  username: { type: 'string', required: true, allowEmpty: false },
  mobile: { type: 'string', required: true, allowEmpty: false },
  password: { type: 'string', required: false, allowEmpty: true },
  userType: { type: 'string', required: true, allowEmpty: false },
  sex: { type: 'string', required: true, allowEmpty: false },
};


module.exports = app => {
  class MerchantController extends app.Controller {
    /**
         * 显示列表
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/list.html', { data, params });
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
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/hotel.html', { data, params });
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
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/restaurant.html', { data, params });
    }

    /**
         * 显示列表
         * @param ctx
         */
    async scenic() {
      const params = this.ctx.request.query;
      params.type = 4;
      this.app.logger.info(params);
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/scenic.html', { data, params });
    }

    /**
         * 显示列表
         * @param ctx
         */
    async entertainment() {
      const params = this.ctx.request.query;
      params.type = 3;
      this.app.logger.info(params);
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/entertainment.html', { data, params });
    }

    /**
         * 显示列表
         * @param ctx
         */

    async speciality() {
      const params = this.ctx.request.query;
      params.type = 5;
      this.app.logger.info(params);
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/speciality.html', { data, params });
    }

    /**
     * 显示列表
     * @param ctx
     */

    async travel() {
      const params = this.ctx.request.query;
      params.type = 6;
      this.app.logger.info(params);
      const data = await this.service.merchant.list(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/travel.html', { data, params });
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
        for (const i in id) {
          if (id[i] === '1') {
            this.ctx.body = this.ctx.helper.res('超级管理员不能删除', 500);
            return;
          }
        }
        if (id.length > 10) {
          this.ctx.body = this.ctx.helper.res('删除的条数不能为0且同时不能多于10条', 500);
          return;
        }
        params.id = id.join(',');
      }

      this.app.logger.info(params);
      const data = await this.service.merchant.delete(params);

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
        return this.ctx.redirect('/error');
      }

      if (id) {
        const data = await this.service.merchant.get({ id });
        await this.ctx.render('merchant/edit.html', { data, params });
        return;
      }
      await this.ctx.render('merchant/edit.html', params);
    }

    /**
         * 查看商家信息
         * @param ctx
         * @return {Promise.<*>}
         */
    async person() {
      const params = this.ctx.request.query;
      const id = params.id;
      this.app.logger.info(params);
      if (id) {
        const data = await this.service.merchant.get({ id });
        await this.ctx.render('merchant/person.html', { data, params });
        return;
      }
      await this.ctx.render('merchant/person.html', params);
    }


    /**
         * 审核
         * @return {Promise.<*>}
         */
    async audit() {
      const params = this.ctx.request.query;
      const id = params.id;

      if (id === '') {
        return this.ctx.redirect('/error');
      }
      if (id) {
        const data = await this.service.merchant.audit({ id });
        // if (result.data.code !== 200) {
        //   await this.ctx.render('merchant/list.html');
        // }
        // const data = result.data.data;
        this.app.logger.info(data);
        await this.ctx.render('merchant/audit.html', { data, params });
        return;
      }
    }


    /**
         * 编辑数据
         * @param ctx
         * @private
         */
    async audit_() {
      const params = this.ctx.request.body;
      const data = await this.service.merchant.audit_(params);
      this.app.logger.info(data);
      this.ctx.body = data;
    }


    /**
         * 审核
         * @return {Promise.<*>}
         */
    async auditt() {
      const params = this.ctx.request.query;
      const id = params.id;

      if (id === '') {
        return this.ctx.redirect('/error');
      }
      if (id) {
        const result = await this.service.merchant.auditt({ id });
        const data = result.data.data;
        this.app.logger.info(data);
        await this.ctx.render('merchant/auditt.html', { data, params });
        return;
      }
      this.app.logger.info('======auditt======');
    }

    /**
         * 判断用户名是否存在
         * @param ctx
         */
    async usernameIsExist() {
      const params = this.ctx.request.body;
      // 如果用户名为空
      if (!params.username) {
        throw new Error('用户名不能为空');
      } else {
        const data = await this.service.merchant.usernameIsExist(params);
        this.ctx.body = data;
      }
    }

    /**
         * 判断手机号是否存在
         * @param ctx
         */
    async mobileIsExist() {
      const params = this.ctx.request.body;
      // 如果用户名为空
      if (!params.mobile) {
        throw new Error('手机号码不能为空');
      }

      const data = await this.service.merchant.mobileIsExist(params);
      this.ctx.body = data;
    }

    /**
         * 修改密码
         * @param ctx
         */
    async modifyPassword() {
      await this.ctx.render('merchant/modify_password_dialog.html');
    }

    /**
         * 修改密码 提交数据
         * @param ctx
         * @private
         */
    async modifyPassword_() {
      const member = this.ctx.session.member;

      const params = this.ctx.request.body;
      params.id = member.id;
      this.logger.info(params);
      // 调用service中的login接口登录
      const data = await this.service.merchant.modifyPassword(params);
      this.ctx.body = data;
    }

    async account() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.ctx.service.merchant.request('merchant/account', params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/account/account.html', { data, params });
    }

    async storeAccount() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.ctx.service.merchant.request('merchant/store/account', params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/account/store.html', { data, params });
    }

    async qr() {
      const params = this.ctx.request.query;
      const data = await this.ctx.service.merchant.request('merchant/qr', params);
      await this.ctx.render('merchant/qr.html', { data, params });
    }

    // 导出二维码收款数据
    async qrExport() {
      const params = this.ctx.request.query;
      const fileName = '二维码收款.xls';
      const res = await this.ctx.fetch(this.app.urls('merchant') + '/qr/export', {
        streaming: true,
        data: params,
        method: 'get',
      });
      this.ctx.attachment(fileName);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.app.logger.info(res);
      this.ctx.body = res.res;
    }


    /**
       * 获取打款页面
       * @return {Promise<Response | *>}
       */
    async fire() {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.service.merchant.getFireList(params);
      this.app.logger.info(data);
      await this.ctx.render('merchant/account/fire_list.html', { data });
    }

    /**
     * 提交bind银行卡
     * @param ctx
     * @private
     */
    async fire_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.merchant.fire_(params);
      this.ctx.body = data;
    }

    /**
     *
     * @param ctx
     * @private
     */
    async withDrawFire() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.merchant.withDrawFire(params);
      this.ctx.body = data;
    }


    /**
       * 获取打款页面
       * @return {Promise<Response | *>}
       */
      async fee() {
          const params = this.ctx.request.query;
          const merchantId = params.merchantId;
          this.app.logger.info(params);

          if (merchantId === '') {
              return this.ctx.redirect('/error');
          }
          if (merchantId) {
              const data = await this.service.merchant.fee(params);
              this.app.logger.info(data);
              await this.ctx.render('/merchant/account/fee.html', { data, merchantId });
              return;
          }
          await this.ctx.render('/merchant/account/fee.html');
      }

      /**
       * 提交bind银行卡
       * @param ctx
       * @private
       */
      async fee_() {
          const params = this.ctx.request.body;
          this.app.logger.info(params);
          const data = await this.service.merchant.fee_(params);
          this.ctx.body = "<div style='padding:20% 0 0 32%;font-size:22px;color:rgb(28,43,55);'>修改成功，关闭弹窗返回列表页！</div>";
      }
    /**
       * 绑定银行卡
       * @param ctx
       * @private
       */
    async bind() {
      const params = this.ctx.request.query;
      const merchantId = params.merchantId;
      this.app.logger.info(params);

      if (merchantId === '') {
        return this.ctx.redirect('/error');
      }
      if (merchantId) {
        const data = await this.service.merchant.getBindInfo(params);
        this.app.logger.info(data);
        await this.ctx.render('/merchant/account/bind.html', { data, merchantId });
        return;
      }
      await this.ctx.render('/merchant/account/bind.html');

    }
    /**
       * 提交bind银行卡
       * @param ctx
       * @private
       */
    async bind_() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);
      const data = await this.service.merchant.bind(params);
      this.app.logger.info(data);
      this.ctx.body = "<div style='padding:20% 0 0 32%;font-size:22px;color:rgb(28,43,55);'>修改成功，关闭弹窗返回列表页！</div>";
    }
  }

  return MerchantController;
};
