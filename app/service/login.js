'use strict';

module.exports = app => {
  class LoginService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    async login(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('login'), {
        method: 'post',
        data: {
          loginName: params.loginName,
          password: params.password,
        },
        dataType: 'json',
      });
      const data = result.data;

      if (data.code != 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


  }

  return LoginService;
};
