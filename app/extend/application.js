const nunjucks = require('nunjucks');
const url = require('../../config/url');
module.exports = {
  /**
     * 返回url.js 中定义的url
     * @param name
     * @param data
     * @returns {string}
     */
  urls(name, data, host = this.config.api.base) {
      let dotIndex = name.indexOf(".");
      if (dotIndex != -1 && data){
          let urlName = name.substr(0, dotIndex);
          let param = name.substr(dotIndex+1);

          let path = url[urlName];

          if (path == undefined){
              path = '/' + urlName;
          }

          let result = host + nunjucks.renderString(`${path}/{{${param}}}`, data);

          if (result == undefined){
              result = host + name
          }

          return result;
      }

      let path = url[name];

      if (path == undefined){
          path = '/' + name;
      }

      if (data){
          let result = host + nunjucks.renderString(path, data);
          return result;
      }else{
          let result = host + path;

          return result;
      }

  },

};
