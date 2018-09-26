'use strict';

module.exports = app => {
  class UploadService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    /**
         * 获取文件上传数据
         * @param params
         */
    async get(params) {
      const result = await this.ctx.curl(this.app.urls('upload', params, this.config.api.common), {
        method: 'get',
        dataType: 'json',
      });
      app.logger.info(result.data);
      return result.data;
    }
  }

  return UploadService;
};
