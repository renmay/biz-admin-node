'use strict';

module.exports = app => {
  class RecordController extends app.Controller {

    /**
         * 显示record
         * @param ctx
         */
    async list() {
      const params = this.ctx.request.query;
      const data = await this.service.log.list(params);
      this.app.logger.info('========log===========');
      this.app.logger.info(data);
      await this.ctx.render('log/list.html',{data,params});
    }
  }

  return RecordController;
};
