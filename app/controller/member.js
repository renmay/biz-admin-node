'use strict';
const rule = {
  mobile: { type: 'string', required: true, allowEmpty: false },
  email: { type: 'string', required: true, allowEmpty: false },
  salt: { type: 'string', required: true, allowEmpty: false },
  password: { type: 'string', required: true, allowEmpty: false },
  tradePassword: { type: 'string', required: true, allowEmpty: false },
  name: { type: 'string', required: true, allowEmpty: false },
  nickName: { type: 'string', required: true, allowEmpty: false },
  avatar: { type: 'string', required: true, allowEmpty: false },
  regip: { type: 'string', required: true, allowEmpty: false },
  status: { type: 'integer', required: true, allowEmpty: false },
  sex: { type: 'integer', required: true, allowEmpty: false },
  memo: { type: 'string', required: true, allowEmpty: false },
  regtime: { type: 'date', required: true, allowEmpty: false },
  updateTime: { type: 'date', required: true, allowEmpty: false },
  points: { type: 'integer', required: true, allowEmpty: false },
  freezePoints: { type: 'integer', required: true, allowEmpty: false },
  money: { type: 'bigdecimal', required: true, allowEmpty: false },
  freezeMoney: { type: 'bigdecimal', required: true, allowEmpty: false },
  openid: { type: 'string', required: true, allowEmpty: false },
  unionid: { type: 'string', required: true, allowEmpty: false },
  nickname: { type: 'string', required: true, allowEmpty: false },
};

module.exports = app => {
  class MemberController extends app.Controller {

    /**
         * 显示列表
         * @param ctx
         */
    async list(ctx) {
      const params = this.ctx.request.query;
      this.app.logger.info(params);
      const data = await this.service.member.list(params);
      await this.ctx.render('member/list.html', { data, params });
    }


    /**
         * 删除
         * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
         * @param ctx
         */
    async delete(ctx) {
      const params = this.ctx.request.body;
      const id = params.id;

      if (!id) {
        this.body = this.ctx.helper.res('请选择要删除的记录', 500);
        return;
      }

      // 判断是批量删除还是单个删除
      if (id instanceof Array) {
        if (id.length > 10) {
          this.body = this.ctx.helper.res('删除的条数不能为0且同时不能多于10条', 500);
          return;
        }
        params.id = id.join(',');
      }

      this.app.logger.info(params);
      const data = await this.service.member.delete(params);

      this.body = data;
    }

    async edit() {
      const params = this.ctx.request.query;
      const id = params.id;

      if (id == '') {
        return this.ctx.redirect('/error');
      }

      if (id) {
        const data = await this.service.member.get({ id });
        await this.ctx.render('member/edit.html', { data, params });
        return;
      }
      await this.ctx.render('member/edit.html', { params });

    }


    /**
         * 编辑数据
         * @param ctx
         * @private
         */
    async edit_(ctx) {
      this.validate(rule);
      const params = this.ctx.request.body;
      const data = await this.service.member.edit(params);
      this.body = data;
    }

  }
  return MemberController;
};
