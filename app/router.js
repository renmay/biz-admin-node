'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);

  // 错误处理
  app.get(/^\/40*/, 'error._40x');
  app.get(/^\/50*/, 'error._50x');
  app.get('/error', 'error.error');
  app.get('/upload', 'upload.get');

  // 首页
  app.get('/', 'statistic.orderSumPage');
  app.get('/index', 'statistic.orderSumPage');
  // app.get('/remote', 'home.remote');

  // 登陆
  app.get('/login', 'login.login');
  app.post('/login', 'login.login');
  app.get('/logout', 'login.logout');


  // 系统模块
  app.get('/module', 'module.list');
  app.get('/module/edit', 'module.edit');
  app.post('/module/edit', 'module.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.get('/module/add', 'module.add');
  app.post('/module/add', 'module.add_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/module/delete', 'module.delete'); // module
  app.get('/module/update', 'module.update');


  // 银行卡模块
  app.get('/bankcard', 'bankcard.list');
  app.get('/bankcard/edit', 'bankcard.edit');
  app.post('/bankcard/edit', 'bankcard.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/bankcard/delete', 'bankcard.delete');

  // member
  app.get('/member', 'member.list');
  app.get('/member/edit', 'member.edit');
  app.post('/member/edit', 'member.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/member/delete', 'member.delete');
  //


  app.post('/merchant/username/exist', 'merchant.usernameIsExist');
  app.post('/merchant/mobile/exist', 'merchant.mobileIsExist');
  app.get('/merchant/modify/password', 'merchant.modifyPassword');
  app.post('/merchant/modify/password', 'merchant.modifyPassword_');


  // printer
  app.get('/printer', 'printer.list');
  app.get('/printer/edit', 'printer.edit');
  app.post('/printer/edit', 'printer.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/printer/delete', 'printer.delete');

  // merchant
  app.get('/merchant', 'merchant.list');
  app.get('/merchant/person', 'merchant.person');

  app.get('/merchant/hotel', 'merchant.hotel');
  app.get('/merchant/restaurant', 'merchant.restaurant');
  app.get('/merchant/entertainment', 'merchant.entertainment');
  app.get('/merchant/scenic', 'merchant.scenic');
  app.get('/merchant/speciality', 'merchant.speciality');
  app.get('/merchant/travel', 'merchant.travel');

  app.get('/merchant/account', 'merchant.account');
  app.get('/merchant/account/statistic', 'merchant.storeAccount');
  app.get('/merchant/qr', 'merchant.qr');
  app.get('/merchant/qrExport', 'merchant.qrExport');
  app.get('/merchant/fee', 'merchant.fee');
  app.post('/merchant/fee', 'merchant.fee_');

  app.post('/merchant/delete', 'merchant.delete');
  app.get('/merchant/audit', 'merchant.audit');
  app.post('/merchant/audit', 'merchant.audit_');
  app.get('/merchant/auditt', 'merchant.auditt');
  app.get('/merchant/fire', 'merchant.fire');
  app.post('/merchant/fire', 'merchant.fire_');
  app.post('/merchant/account/fire', 'merchant.withDrawFire');
  app.get('/merchant/bind', 'merchant.bind');
  app.post('/merchant/bind', 'merchant.bind_');


  // store
  app.get('/store', 'store.list');
  app.get('/store/sort', 'store.sort');
  app.post('/store/sort', 'store.sort_');

  app.post('/store/close', 'store.close');
  app.post('/store/open', 'store.open');
  app.get('/store/edit', 'store.edit');
  app.post('/store/edit', 'store.edit_');

  app.post('/store/isOfficial', 'store.isOfficial');
  app.post('/store/unOfficial', 'store.unOfficial');


  app.get('/store/hotel', 'store.hotel');
  app.get('/store/restaurant', 'store.restaurant');
  app.get('/store/entertainment', 'store.entertainment');
  app.get('/store/scenic', 'store.scenic');
  app.get('/store/speciality', 'store.speciality');
  app.get('/store/travel', 'store.travel');

  // 店铺 高端定制
  app.get('/storeCustom', 'storeCustom.list');
  app.get('/storeCustom/edit', 'storeCustom.edit');
  app.post('/storeCustom/edit', 'storeCustom.edit_');

  // 店铺模块
  app.get('/storeModule', 'storeModule.list');
  app.get('/storeModule/add', 'storeModule.add');
  app.get('/storeModule/update', 'storeModule.update');
  app.post('/storeModule/add', 'storeModule.add_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/storeModule/delete', 'storeModule.delete'); // module


  // goods(商家商品)
  app.get('/goods', 'goods.list');
  app.post('/goods/delete', 'goods.delete');
  app.get('/goods/edit', 'goods.edit');
  app.post('/goods/edit', 'goods.edit_');
  app.post('/goods/putoff', 'goods.putoff');
  app.post('/goods/puton', 'goods.puton');
  app.post('/goods/recommend', 'goods.recommend');
  app.post('/goods/recommend/cancel', 'goods.recommendCancel');
  app.get('/goods/sort', 'goods.sort');
  app.post('/goods/sort', 'goods.sort_');

  app.post('/goods/hot', 'goods.hot');
  app.post('/goods/isNotHot', 'goods.isNotHot');

  app.get('/goods/hotel', 'goods.hotel');
  app.get('/goods/restaurant', 'goods.restaurant');
  app.get('/goods/entertainment', 'goods.entertainment');
  app.get('/goods/scenic', 'goods.scenic');
  app.get('/goods/speciality', 'goods.speciality');
  app.get('/goods/travel', 'goods.travel');


  // alliance(商家联盟)
  app.get('/alliance', 'alliance.list');
  app.post('/alliance/delete', 'alliance.delete');
  app.get('/alliance/edit', 'alliance.edit_');
  app.post('/alliance/edit', 'alliance.edit_');

  // users(用户列表)
  app.get('/users', 'users.list');
  app.post('/users/delete', 'users.delete');
  app.get('/users/edit', 'users.edit_');
  app.post('/users/edit', 'users.edit_');


  // merchantConfig
  app.get('/merchantConfig', 'merchantConfig.list');
  app.get('/merchantConfig/edit', 'merchantConfig.edit');
  app.post('/merchantConfig/edit', 'merchantConfig.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/merchantConfig/delete', 'merchantConfig.delete');

  // merchantUnionPayInfo
  app.get('/merchantUnionPayInfo', 'merchantUnionPayInfo.list');
  app.get('/merchantUnionPayInfo/edit', 'merchantUnionPayInfo.edit');
  app.post('/merchantUnionPayInfo/edit', 'merchantUnionPayInfo.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/merchantUnionPayInfo/delete', 'merchantUnionPayInfo.delete');

  // systemConfig
  app.get('/systemConfig', 'systemConfig.list');
  app.get('/systemConfig/edit', 'systemConfig.edit');
  app.post('/systemConfig/edit', 'systemConfig.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/systemConfig/delete', 'systemConfig.delete');

  // 微信配置
  app.get('/thirdConfig/weixin', 'thirdConfig.weixin');
  app.get('/thirdConfig/weixin/edit', 'thirdConfig.weixinEdit');
  app.post('/thirdConfig/weixin/edit', 'thirdConfig.weixinEdit_');

  // 微信app配置
  app.get('/thirdConfig/weixin/app', 'thirdConfig.weixinApp');
  app.get('/thirdConfig/weixin/app/edit', 'thirdConfig.weixinAppEdit');
  app.post('/thirdConfig/weixin/app/edit', 'thirdConfig.weixinAppEdit_');

  // 阿里配置
  app.get('/thirdConfig/alipay', 'thirdConfig.alipay');
  app.get('/thirdConfig/alipay/edit', 'thirdConfig.alipayEdit');
  app.post('/thirdConfig/alipay/edit', 'thirdConfig.alipayEdit_');

  // 银联配置
  app.get('/thirdConfig/union/pay', 'thirdConfig.unionPay');
  app.get('/thirdConfig/union/pay/edit', 'thirdConfig.unionPayEdit');
  app.post('/thirdConfig/union/pay/edit', 'thirdConfig.unionPayEdit_');

  // 银联app配置
  app.get('/thirdConfig/union/app/pay', 'thirdConfig.unionAppPay');
  app.get('/thirdConfig/union/app/pay/edit', 'thirdConfig.unionAppPayEdit');
  app.post('/thirdConfig/union/app/pay/edit', 'thirdConfig.unionAppPayEdit_');

  // 银联打款
  app.get('/thirdConfig/union/corp/pay', 'thirdConfig.unionCorpPay');
  app.get('/thirdConfig/union/corp/pay/edit', 'thirdConfig.unionCorpPayEdit');
  app.post('/thirdConfig/union/corp/pay/edit', 'thirdConfig.unionCorpPayEdit_');


  app.get('/statistic/order/sum', 'statistic.orderSumPage');
  app.get('/statistic/order/sum/count', 'statistic.orderSumCount');
  // app.get('/statistic/order/sum/pie', 'statistic.orderSumPie');
  // app.get('/statistic/order/sum/line', 'statistic.orderSumLine');

  app.get('/statistic/order/number', 'statistic.orderNumberPage');
  app.get('/statistic/order/number/count', 'statistic.orderNumberCount');
  app.get('/statistic/order/number/pie', 'statistic.orderNumberPie');
  app.get('/statistic/order/number/line', 'statistic.orderNumberLine');

  app.get('/statistic/merchant', 'statistic.merchantPage');
  app.get('/statistic/merchant/pie', 'statistic.merchantPie');
  app.get('/statistic/merchant/line', 'statistic.merchantLine');

  app.get('/statistic/member', 'statistic.memberPage');
  app.get('/statistic/member/line', 'statistic.memberLine');

  // banner
  app.get('/banner', 'banner.list');
  app.get('/banner/edit', 'banner.edit');
  app.post('/banner/edit', 'banner.edit_');
  app.post('/banner/delete', 'banner.delete');

  // annual
  app.get('/annual', 'annual.list');
  app.post('/annual/faka', 'annual.faka');
  app.post('/annual/delete', 'annual.delete');


  app.get('/annualConfig', 'annualConfig.list');
  app.get('/annualConfig/edit', 'annualConfig.edit');
  app.post('/annualConfig/edit', 'annualConfig.edit_');


  // 扫码订单sweep
  app.get('/sweep', 'sweep.list');


  // order(订单)
  app.get('/order', 'order.list');
  app.get('/order/edit', 'order.edit');

  app.get('/prepaid', 'prepaid.list');
  app.get('/prepaid/edit', 'prepaid.edit');

  app.get('/water', 'water.list');
  app.get('/water/edit', 'water.edit');

  app.get('/order/hotel', 'order.hotel');
  app.get('/order/restaurant', 'order.restaurant');
  app.get('/order/entertainment', 'order.entertainment');
  app.get('/order/scenic', 'order.scenic');
  app.get('/order/speciality', 'order.speciality');
  app.get('/order/travel', 'order.travel');

  // 导出excle
  // app.get('/export', 'export.index');
  app.get('/export', 'export.download');
  app.get('/export/prepaid', 'export.prepaid');
  app.get('/export/water', 'export.water');

  app.get('/businessAccount', 'businessAccount.list');
  app.get('/money', 'money.list');
  app.get('/money/exportMoney', 'money.exportMoney');

  app.get('/log', 'log.list');


  // qrall
  app.get('/qrall', 'qrall.list');
  app.get('/qrall/addqr', 'qrall.addqr');
  app.post('/qrall/addqr', 'qrall.addqr_');
  app.post('/qrall/delete', 'qrall.delete');

  // qrused
  app.get('/qrused', 'qrused.list');
  app.post('/qrused/delete', 'qrused.delete');


  // adminAccount
  app.get('/account', 'account.list');
  app.get('/account/edit', 'account.edit');
  app.post('/account/edit', 'account.edit_');
  app.post('/account/delete', 'account.delete');
  app.post('/account/enable', 'account.enable');
  app.post('/account/disable', 'account.disable');
  app.get('/account/modify/password', 'account.showModifyPasswordPage');
  app.post('/account/modify/password', 'account.modifyPassword');

  // version for merchant(mcht)
  app.get('/version/mcht', 'version.listMerchant');
  app.get('/version/mcht/edit', 'version.editMerchant');
  app.post('/version/mcht/edit', 'version.edit_');
  app.get('/version/mcht/view', 'version.viewMerchant');

  // version for user
  app.get('/version/user', 'version.listUser');
  app.get('/version/user/edit', 'version.editUser');
  app.post('/version/user/edit', 'version.edit_');
  app.get('/version/user/view', 'version.viewUser');

  // roadbook
  app.get('/roadbook', 'roadbook.list');
  app.get('/roadbook/edit', 'roadbook.edit');
  app.post('/roadbook/edit', 'roadbook.edit_'); // 如果是post方法修改数据 在后面加 '_' 区分
  app.post('/roadbook/delete', 'roadbook.delete');

};
