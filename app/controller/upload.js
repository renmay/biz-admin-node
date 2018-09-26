'use strict';

module.exports = app => {
    class UploadController extends app.Controller {
        async get() {
            let data = await this.service.upload.get();
            this.success(data);
        };
    }
    return UploadController;
};



