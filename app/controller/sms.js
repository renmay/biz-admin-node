'use strict';

module.exports = app => {
    class SmsController extends app.Controller {
        async send(){
            await this.ctx.render("sms/send.html");
        };


        async send_() {
            let params = this.ctx.request.body;
            let data = await this.service.sms.send(params);
            this.success(data);
        };

    }
    return SmsController;
};