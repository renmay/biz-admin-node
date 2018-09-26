'use strict';

module.exports = app => {
    class StatisticController extends app.Controller {

        /**
         * 渲染页面
         * @returns {Promise<void>}
         */
        async orderSumPage() {
            await this.ctx.render('statistic/sum.html');
        }

      /**
       * 获取金额所有数据
       * @returns {Promise<void>}
       */
      async orderSumCount() {
          const params = this.ctx.request.query;
          const data = await this.service.statistic.orderSumCount(params);
          this.app.logger.info(data);
          this.ctx.body = data;
      }

      /**
       * 获取今日金额
       * @returns {Promise<void>}
       */
      async orderSumToday() {
        const params = this.ctx.request.query;
        const data = await this.service.statistic.orderSumToday(params);
        this.app.logger.info(data);
        this.ctx.body = data;
      }

        // /**
        //  * 获取sumCount
        //  * @returns {Promise<void>}
        //  */
        // async orderSumCount() {
        //     const params = this.ctx.request.query;
        //     const data = await this.service.statistic.orderSumCount(params);
        //     this.app.logger.info(data);
        //     this.ctx.body = data;
        // }
        //
        // /**
        //  * 获取饼图数据
        //  * @returns {Promise<void>}
        //  */
        // async orderSumPie() {
        //     const params = this.ctx.request.query;
        //     const data = await this.service.statistic.orderSumPie(params);
        //     this.app.logger.info(data);
        //     this.ctx.body = data;
        // }
        //
        // /**
        //  * 获取折线图数据
        //  * @returns {Promise<void>}
        //  */
        // async orderSumLine() {
        //     const params = this.ctx.request.query;
        //     const data = await this.service.statistic.orderSumLine(params);
        //     this.app.logger.info(data);
        //     this.ctx.body = data;
        // }



        /**
         * 渲染页面
         * @returns {Promise<void>}
         */
        async orderNumberPage() {
            await this.ctx.render('statistic/order.html');
        }

        /**
         * orderCount获取文字数据
         * @returns {Promise<void>}
         */
        async orderNumberCount() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.orderNumberCount(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }

        /**
         * 获取饼图数据
         * @returns {Promise<void>}
         */
        async orderNumberPie() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.orderNumberPie(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }

        /**
         * 获取折线图数据
         * @returns {Promise<void>}
         */
        async orderNumberLine() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.orderNumberLine(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }


        /**
         * 渲染页面
         * @returns {Promise<void>}
         */
        async merchantPage() {
            await this.ctx.render('statistic/merchant.html');
        }

        /**
         * 获取饼图数据
         * @returns {Promise<void>}
         */
        async merchantPie() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.merchantPie(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }

        /**
         * 获取折线图数据
         * @returns {Promise<void>}
         */
        async merchantLine() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.merchantLine(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }


        /**
         * 渲染页面
         * @returns {Promise<void>}
         */
        async memberPage() {
            await this.ctx.render('statistic/member.html');
        }

        async memberLine() {
            const params = this.ctx.request.query;
            const data = await this.service.statistic.memberLine(params);
            this.app.logger.info(data);
            this.ctx.body = data;
        }
    }

    return StatisticController;
};
