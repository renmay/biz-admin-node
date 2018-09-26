'use strict';
const rule = {
  name: { type: 'string', required: true, allowEmpty: false },
  value: { type: 'string', required: true, allowEmpty: false },
  condition: { type: 'string', required: true, allowEmpty: false },
  sort: { type: 'intString', required: true, allowEmpty: false },
};

/**
 * 显示列表
 * @param ctx
 */
exports.list = function* (ctx) {
  const params = this.request.query;
  this.app.logger.info(params);
  const data = yield this.service.privilege.list(params);
  yield this.render('privilege/list.html', { data, params });
};


/**
 * 删除
 * 批量删除时使用','将id分隔开，却最好id的数量不要超过10条
 * @param ctx
 */
exports.delete = function* (ctx) {
  const params = this.request.body;
  const id = params.id;
  if (!id) {
    this.body = this.helper.res('请选择要删除的记录', 500);
    return;
  }
  // 判断是批量删除还是单个删除
  if (id instanceof Array) {
    if (id.length > 10) {
      this.body = this.helper.res('删除的条数不能为0且同时不能多于10条', 500);
      return;
    }
    params.id = id.join(',');
  }

  this.app.logger.info(params);
  const data = yield this.service.privilege.delete(params);

  this.body = data;
};

exports.edit = function* (ctx) {
  const params = this.request.query;
  const id = params.id;

  if (id == '') {
    return this.redirect('/error');
  }

  if (id) {
    const data = yield this.service.privilege.get({ id });
    yield this.render('privilege/edit.html', { data, params });
    return;
  }
  yield this.render('privilege/edit.html', { params });

};

/**
 * 编辑数据
 * @param ctx
 * @private
 */
exports.edit_ = function* (ctx) {
  this.validate(rule);
  const params = this.request.body;
  const data = yield this.service.privilege.edit(params);
  yield this.body = data;
};

exports.send = function* (ctx) {
  const params = this.request.query;
  const id = params.id;

  if (!id || id == '') {
    return this.redirect('/error');
  }

  const data = yield this.service.privilege.get({ id });
  yield this.render('privilege/send.html', { data, params });
};

/**
 * 编辑数据
 * @param ctx
 * @private
 */
exports.send_ = function* (ctx) {
  // this.validate(rule);
  const params = this.request.body;
  const data = yield this.service.privilege.send(params);
  yield this.body = data;
};

