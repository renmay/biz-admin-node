'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const params = this.ctx.request.body;
      this.app.logger.info(params);

      await this.ctx.render('index.html');
    }

    async remote() {
      // 从session中获取用户信息
      const user = this.ctx.session.user;
      this.app.logger.info(user);
      await this.ctx.render('remote.html');
    }

    async user() {
      // 从session中获取用户信息
      const user = this.ctx.session.user;
      this.app.logger.info(user);
      await this.ctx.render('user.html');
    }
  }
  return HomeController;
};

