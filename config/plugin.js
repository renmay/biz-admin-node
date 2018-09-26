'use strict';

module.exports =  {
    static: {
        enable: true,
        package: 'egg-static'
    },
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    },
    validate: {
        enable: true,
        package: 'egg-validate',
    },
    redis: {
        enable: true,
        package: 'egg-redis'
    },
    sessionRedis:{
        enable: true,
        package: 'egg-session-redis'
    }
};