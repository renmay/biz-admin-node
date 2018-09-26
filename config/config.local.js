module.exports = app => {
  const exports = {

  };

  exports.api = {
    // base: 'http://47.106.104.100:8083',
    base: 'http://192.168.1.123:8089',
    // base: 'http://192.168.1.114:8081',
    common: 'http://common.qxlds.com',
    static: '',
    image: 'http://static.qxlds.com',
  };

  exports.static = {
    prefix: '',
  };

  exports.redis = {
    client: {
      host: '120.79.0.38',
      db: 5,
      port: 6379,
      password: 'Wd123456',
    },
  };

  exports.development = {
    watchDirs: [ '/app/data' ],
    ignoreDirs: [],
    fastReady: true,
  };

  return exports;
};