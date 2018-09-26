'use strict';

module.exports = app => {
  class LoginController extends app.Controller {

    async login() {
      // 从session中获取用户信息
      if (this.ctx.request.method === 'GET') { // get请求
        const token = await this.service.auth.get();
        this.ctx.session.token = token.authorization;
        await this.ctx.render('login.html');
      } else { // post
        this.ctx.validate({
          loginName: { type: 'string', required: true, allowEmpty: false },
          password: { type: 'password', required: true, allowEmpty: false, min: 3 },
        });
        const params = this.ctx.request.body;
        app.logger.info(params);
        // 调用service中的login接口登录
        const member = await this.service.login.login(params);
        // 将登陆成功的信息放入session中 后续验证用户登录中通过此信息判断用户是否登录
        this.app.logger.info(member);
        this.ctx.session.member = member;

        // 放回json数据
        this.success();
      }
    }

    async logout() {
      // 将登陆成功的信息放入session中 后续验证用户登录中通过此信息判断用户是否登录
      this.ctx.session.member = undefined;
      this.ctx.redirect('/login');
    }
  }
  return LoginController;
};

