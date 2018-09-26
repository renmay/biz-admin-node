'use strict';
const crypto = require('crypto');
const nunjucks = require('nunjucks');
const moment = require('moment');
const util = require('util');

// this 是 helper 对象，在其中可以调用其他 helper 方法
// this.ctx => context 对象
// this.app => application 对象
module.exports = {

  res(message = '', code = 200, data = '') {
    return {
      code,
      message,
      data,
    };
  },
  /**
   * 和当前时间比较大小
   * 支持的格式为 2017-09-09 21:22:11
   * @param data
   * @return {string}
   */
  compareDate(date1, date2) {
    if (!date2) {
      date2 = moment();
    } else {
      date2 = moment(date2);
    }
    return moment(date1).valueOf() - date2.valueOf();

  },
  currentDate(format) {
    if (util.isNullOrUndefined(format)) {
      format = 'YYYY/MM/DD HH:mm:ss';
    }
    return moment(new Date()).format(format);
  },
  minusDay(days, date) {
    const d = new Date(date);
    const Year = d.getFullYear();
    const Mon = d.getMonth() + 1;
    const Day = d.getDate() - days;
    const result = Year + '/' + Mon + '/' + Day;
    return result;
  },
  addDay(days, date) {
    const d = new Date(date);
    const Year = d.getFullYear();
    const Mon = d.getMonth() + 1;
    const Day = d.getDate() + days;
    const result = Year + '/' + Mon + '/' + Day;
    return result;
  },
  /**
   * 计算两个日期之间差
   * @param date1
   * @param date2
   */
  diffOfDate(date1, date2, type = 'days') {
    if (!date2) {
      date2 = moment();
    } else {
      date2 = moment(date2);
    }
    return moment(date1).diff(date2, type);
  },
  date(data, format) {
    if (util.isNullOrUndefined(data)) {
      return '';
    }
    if (util.isNullOrUndefined(format)) {
      format = 'YYYY/MM/DD HH:mm:ss';
    }
    return moment(data).format(format);
  },
  jsonToString(data) {
    return JSON.stringify(data);
  },
  stringToJson(data) {
    return JSON.parse(data);
  },
  renderString(str, data) {
    return nunjucks.renderString(str, data);
  },
  show(data, length) {
    if (!data) {
      return '';
    }
    if (length && data.length > length) {
      return data.substring(0, length) + '...';
    }
    return data;
  },
  /**
   *  https://help.aliyun.com/document_detail/44688.html?spm=5176.doc48884.6.932.5LI6BH
   *  指定缩略的模式：
   *   lfit：等比缩放，限制在设定在指定w与h的矩形内的最大图片。
   *   mfit：等比缩放，延伸出指定w与h的矩形框外的最小图片。
   *   fill：固定宽高，将延伸出指定w与h的矩形框外的最小图片进行居中裁剪。
   *   pad：固定宽高，缩略填充
   *   fixed：固定宽高，强制缩略
   * @param width
   * @param height
   * @param m_fill
   * @return {string}
   */
  showImage(image, width = 100, height = 100, scale = 'lfit') {
    if (!image || image == '') {
      return '/img/no-image.png';
    }

    if (image.indexOf('http://') == 0 || image.indexOf('https://') == 0) {
      return image;
    }
    const params = 'x-oss-process=image/resize,m_' + scale + ',w_' + width + ',h_' + height;
    return this.config.api.image + '/' + image + '?' + params;

  },

  /**
   * oss 上传签名
   * @param accesskey oos加密的key
   * @param expire  过期时间 默认10分钟
   * @param maxSize 上传大小 默认10M = 1024 * 1204 * 10
   * @param dir 指定用户上传的文件目录 必须在此目录下才能上传
   * @return {*}
   */
  oosSign(secret, expire = 10, maxSize = 1048576000, dir = '') {

    const date = new Date();
    const timestamp = date.getTime() + expire * 60 * 1000;
    const expiration = new Date(timestamp).toISOString();

    dir = dir == '' ? date.getTime() : dir;

    const policyText = {
      expiration, // 设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
      conditions: [
        ['content-length-range', 0, maxSize], // 设置上传文件的大小限制 默认10M = 1024 * 1014 * 10
        ['starts-with', '$key', `temp/${dir}/`], // 指定上传到的目录前缀
      ],
    };

    const base64Policy = new Buffer(JSON.stringify(policyText)).toString('base64');

    // signature
    const hmac = crypto.createHmac('sha1', secret);
    hmac.update(base64Policy);
    const signature = hmac.digest('base64');

    const result = {
      policy: base64Policy,
      signature,
      expire: timestamp,
      maxSize,
      dir: `temp/${dir}/`,
    };

    return result;
  },
};
