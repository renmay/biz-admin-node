'use strict';

module.exports = app => {
  class AnalyzeService extends app.Service {
    // orderPriceStatistic
    /**
         *
         * @param params
         * @return {Promise<void>}
         */


    /**
         *
         * @param orderCount
         * @return {Promise<void>}
         */
    async orderSumCount(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('orderPriceStatistic'), {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================金额数据===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }




    // /**
    //      *
    //      * @param params
    //      * @return {Promise<void>}
    //      */
    // async orderSumLine(params) {
    //   /**
    //          * 请求后台接口
    //          */
    //   const result = await this.ctx.fetch(this.app.urls('orderPriceStatistic') + '/line', {
    //     method: 'get',
    //     dataType: 'json',
    //     data: params,
    //   });
    //   this.app.logger.info(result);
    //   this.app.logger.info('===========================line===============================');
    //   const data = result.data;
    //   this.app.logger.info(data.data);
    //   if (result.data.code !== 200) {
    //     throw new Error(data.message ? data.message : 'error');
    //   }
    //   return data.data;
    // }


    // orderNumberStatistic
    /**
         *
         * @param orderCount
         * @return {Promise<void>}
         */
    async orderNumberCount(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('orderNumberStatistic') + '/count', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================orderCount===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async orderNumberPie() {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('orderNumberStatistic') + '/pie', {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================pie===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async orderNumberLine() {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('orderNumberStatistic') + '/line', {
        method: 'get',
        dataType: 'json',
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================line===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }






    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async merchantPie(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('merchantStatistic') + '/pie', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================pie===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async merchantLine(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('merchantStatistic') + '/line', {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================line===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }

    /**
         *
         * @param params
         * @return {Promise<void>}
         */
    async memberLine(params) {
      /**
             * 请求后台接口
             */
      const result = await this.ctx.fetch(this.app.urls('memberStatistic'), {
        method: 'get',
        dataType: 'json',
        data: params,
      });
      this.app.logger.info(result);
      this.app.logger.info('===========================line===============================');
      const data = result.data;
      this.app.logger.info(data.data);
      if (result.data.code !== 200) {
        throw new Error(data.message ? data.message : 'error');
      }
      return data.data;
    }


  }

  return AnalyzeService;
};
