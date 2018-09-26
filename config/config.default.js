const path = require('path');
// 使用require方法加载fs核心模块
const fs = require('fs');
const url = require('./url');

module.exports = app => {
  const exports = {
    url,
    keys: 'keys',
    title: '后台管理系统',
  };

  exports.api = {
    base: 'http://47.106.104.100:8083',
    // base: 'http://192.168.1.198:8080',
    common: 'http://common.qxlds.com',
    static: '',
    image: 'http://static.qxlds.com',
  };

  exports.view = {
    defaultViewEngine: 'nunjucks',
  };

  exports.static = {
    prefix: '',
  };

  exports.i18n = {
    defaultLocale: 'zh-CN',
  };

  exports.security = {
    csrf: {
      enable: false,
    },
  };

  exports.redis = {
    client: {
      host: 'r-wz9d24adf349f2a4.redis.rds.aliyuncs.com',
      db: 2,
      port: 6379,
      password: 'Qxl123456',
    },
  };

  exports.session = {
    key: 'wd:sess',
    prefix: 'koa:sess:',
    maxAge: 60 * 60 * 1000, // ms
    httpOnly: true,
    encrypt: true,
    rolling: true,
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  // 中间件
  exports.middleware = [
    'auth',
    'errorHandler',
    'authorization',
  ];

  // 登录中间件 忽略/login
  exports.auth = {
    ignore: [
      '/login',
    ],
  };


  return exports;
};
