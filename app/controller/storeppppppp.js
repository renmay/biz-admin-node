'use strict';
const rule = {
		name: {type: 'string', required: true, allowEmpty: false},
		username: {type: 'string', required: true, allowEmpty: false},
		mobile: {type: 'string', required: true, allowEmpty: false},
		password: {type: 'string', required: false, allowEmpty: true},
		type: {type: 'intString', required: true, allowEmpty: false},
		sex: {type: 'intString', required: true, allowEmpty: false},
	};

/**
 * 显示列表
 * @param ctx
 */
// exports.list = function* (ctx) {
//     let params = this.request.query;
//     this.app.logger.info(params);
//     let data = yield this.service.store.list(params);
//     yield this.render("store/list.html", {data: data, params});
// };

exports.list = function* (ctx) {
    // let params = this.request.query;
    // this.app.logger.info(params);
    // let data = yield this.service.store.list(params);
    yield this.render("store/list.html");
};

/**
 * 删除
 * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
 * @param ctx
 */
exports.delete = function* (ctx) {
    let params = this.request.body;
    let id = params.id;

    if (!id){
        this.body = this.helper.res('请选择要删除的记录', 500);
        return;
    }


    //判断是批量删除还是单个删除
    if (id instanceof Array){
        for (let i in id) {
            if (id[i] == '1'){
                this.body = this.helper.res('超级管理员不能删除', 500);
                return;
            }
        }
        if (id.length > 10){
            this.body = this.helper.res('删除的条数不能为0且同时不能多于10条', 500);
            return;
        }
        params.id = id.join(',');
    }

    this.app.logger.info(params);
    let data = yield this.service.store.delete(params);

    this.body = data;
};

// exports.edit = function* (ctx) {
//     let params = this.request.query;
//     let id = params.id;

//     if (id == ''){
//         return this.redirect('/error');
//     }

//     let menus = yield this.service.store.menu();

//     if (id){
//         let data = yield this.service.store.get({id: id});
//         yield this.render("store/edit.html", {data, params, menus});
//         return;
//     }
//     yield this.render("store/edit.html", {params, menus});
    
// };
exports.edit = function* (ctx) {
    // let params = this.request.query;
    // let id = params.id;

    // if (id == ''){
    //     return this.redirect('/error');
    // }

    // let menus = yield this.service.store.menu();

    // if (id){
    //     let data = yield this.service.store.get({id: id});
    //     yield this.render("store/edit.html", {data, params, menus});
    //     return;
    // }
    yield this.render("store/edit.html");
    
};

/**
 * 编辑数据
 * @param ctx
 * @private
 */
exports.edit_ = function* (ctx) {
    this.validate(rule);
    let params = this.request.body;
    let data = yield this.service.store.edit(params);
    yield this.body = data;
};


/**
 * 判断用户名是否存在
 * @param ctx
 */
exports.usernameIsExist = function* (ctx) {
    let params = this.request.body;
    //如果用户名为空
    if (!params.username){
        throw new Error('用户名不能为空');
    }else{
        let data = yield this.service.store.usernameIsExist(params);
        yield this.body = data;
    }
};

/**
 * 判断手机号是否存在
 * @param ctx
 */
exports.mobileIsExist = function* (ctx) {
    let params = this.request.body;
    //如果用户名为空
    if (!params.mobile){
        throw new Error('手机号码不能为空');
    }

    let data = yield this.service.store.mobileIsExist(params);
    yield this.body = data;
};

/**
 * 修改密码
 * @param ctx
 */
exports.modifyPassword = function* (ctx) {
    yield this.render("store/modify_password_dialog.html");
}

/**
 * 修改密码 提交数据
 * @param ctx
 * @private
 */
exports.modifyPassword_ = function* (ctx) {
    let member = this.session.member;

    const params = this.request.body;
    params.id = member.id;
    this.logger.info(params);
    //调用service中的login接口登录
    const data = yield this.service.store.modifyPassword(params);

    this.body = data;
}
