'use strict';

module.exports = {
  menu: [
    {
      url: '/index',
      icon: 'fa fa-bar-chart',
      name: '统计',
      children: [
        {
          url: '/statistic/order/sum',
          name: '交易统计',
        },
        {
          url: '/statistic/order/number',
          name: '订单统计',
        },
        {
          url: '/statistic/member',
          name: '用户统计',
        },
        {
          url: '/statistic/merchant',
          name: '商家统计',
        },

      ],
    },
    {
      url: '/user',
      icon: 'fa fa-users',
      name: '用户',
      children: [
        {
          url: '/users',
          name: '用户列表',
        },
      ],
    },
    {
      url: '/store',
      icon: 'fa fa-home',
      name: '店铺',
      children: [
        {
          url: '/store',
          name: '全部店铺',
        },
        {
          url: '/store/hotel',
          name: '酒店',
        },
        {
          url: '/store/restaurant',
          name: '餐饮',
        },
        {
          url: '/store/scenic',
          name: '景区',
        },
        {
          url: '/store/entertainment',
          name: '娱乐',
        },
        {
          url: '/store/speciality',
          name: '特产',
        },
        {
          url: '/store/travel',
          name: '旅行社',
        },
        {
          url: '/storeCustom',
          name: '高端定制',
        },
      ],
    },
    {
      url: '/merchant',
      icon: 'fa fa-male',
      name: '商家',
      children: [
        {
          url: '/merchant',
          name: '全部商家',
        },
        // {
        //   url: '/alliance',
        //   name: '商家联盟',
        // },
        {
          url: '/merchant/hotel',
          name: '酒店',
        },
        {
          url: '/merchant/restaurant',
          name: '餐饮',
        },
        {
          url: '/merchant/scenic',
          name: '景区',
        },
        {
          url: '/merchant/entertainment',
          name: '娱乐',
        },
        {
          url: '/merchant/speciality',
          name: '特产',
        },
        {
          url: '/merchant/travel',
          name: '旅行社',
        },
        {
          url: '/merchant/account',
          name: '商家收款统计',
        },
        {
          url: '/merchant/account/statistic',
          name: '店铺营业统计',
        },
        {
          url: '/merchant/qr',
          name: '二维码收款',
        },
        {
          url: '/merchant/fire',
          name: '打款',
        },
        // {
        //   url: '/merchantUnionPayInfo',
        //   name: '商家银联',
        // },
      ],
    },
    {
      url: '/goods',
      icon: 'fa fa-shopping-cart',
      name: '商品',
      children: [
        {
          url: '/goods',
          name: '全部商品',
        },
        {
          url: '/goods/hotel',
          name: '酒店',
        },
        {
          url: '/goods/restaurant',
          name: '餐饮',
        },
        {
          url: '/goods/scenic',
          name: '景区',
        },
        {
          url: '/goods/entertainment',
          name: '娱乐',
        },
        {
          url: '/goods/speciality',
          name: '特产',
        },
        {
          url: '/goods/travel',
          name: '旅行社',
        },
      ],
    },
    {
      url: '/order',
      icon: 'fa fa-list',
      name: '订单',
      children: [
        {
          url: '/order',
          name: '订单列表',
        },

        // {
        //   url: '/sweep',
        //   name: '扫码列表',
        // },
        {
          url: '/order/hotel',
          name: '酒店',
        },
        {
          url: '/order/restaurant',
          name: '餐饮',
        },
        {
          url: '/order/scenic',
          name: '景区',
        },
        {
          url: '/order/entertainment',
          name: '娱乐',
        },
        {
          url: '/order/speciality',
          name: '特产',
        },
        {
          url: '/order/travel',
          name: '旅行社',
        },
      ],
    },
    {
      url: '/water',
      icon: 'fa fa-list-ul',
      name: '第三方',
      children: [
        {
          url: '/water',
          name: '水费列表',
        },
        {
          url: '/prepaid',
          name: '话费列表',
        },
      ],
    },
    {
      url: '/module',
      icon: 'fa fa-pie-chart',
      name: '模块',
      children: [
        {
          url: '/module',
          name: '系统模块',
        },
      ],
    },
    {
      url: '/banner',
      icon: 'fa fa-picture-o',
      name: '轮播',
      children: [
        {
          url: '/banner',
          name: '轮播图',
        },
      ],
    },
    {
      url: '/annual',
      icon: 'fa fa-credit-card',
      name: '年卡',
      children: [
        {
          url: '/annual',
          name: '年卡',
        },
        {
          url: '/annualConfig',
          name: '年卡配置',
        },
      ],
    },
    {
      url: '/systemConfig',
      icon: 'fa fa-cog',
      name: '配置',
      children: [
        {
          url: '/systemConfig',
          name: '系统',
        },
        {
          url: '/thirdConfig/weixin',
          name: '微信',
        },
        {
          url: '/thirdConfig/weixin/app',
          name: '微信app',
        },
        {
          url: '/thirdConfig/alipay',
          name: '支付宝',
        },
        {
          url: '/thirdConfig/union/pay',
          name: '银联',
        },
        {
          url: '/thirdConfig/union/app/pay',
          name: '银联App',
        },
        {
          url: '/thirdConfig/union/corp/pay',
          name: '银联打款',
        },
      ],
    },
    {
      url: '/money',
      icon: 'fa fa-money',
      name: '提现',
      children: [
        {
          url: '/businessAccount',
          name: '账户列表',
        },
        {
          url: '/money',
          name: '提现列表',
        },
      ],
    },
    {
      url: '/qrall',
      icon: 'fa fa-crosshairs',
      name: '二维码',
      children: [
        {
          url: '/qrall',
          name: '全部',
        },
        {
          url: '/qrused',
          name: '已绑定',
        },
      ],
    },
    {
      url: '/account',
      icon: 'fa fa-user',
      name: '管理员',
      children: [
        {
          url: '/account',
          name: '管理员列表',
        },
      ],
    },
    {
      url: '/roadbook',
      icon: 'fa fa-book',
      name: '路书',
      children: [
        {
          url: '/roadbook',
          name: '路书管理',
        },
      ],
    },
    {
      url: '/version/merchant',
      icon: 'fa fa-code-fork',
      name: '版本',
      children: [
        {
          url: '/version/mcht',
          name: '商家端',
        },
        {
          url: '/version/user',
          name: '用户端',
        },
      ],
    },
    {
      url: '/log',
      icon: 'fa fa-history',
      name: '日志',
      children: [
        {
          url: '/log',
          name: '日志列表',
        },
      ],
    },
  ],
  getMenu(url) {
    const menu = this.menu;
    if (!url || url == '/' || url == '') {
      for (const i in menu) {
        if (i == 0) {
          menu[0].current = true;
          menu[0].children[0].current = true;
        } else {
          menu[i].current = false;
        }
        // 取出第一个children的url赋值给menu
        const first_children = menu[i].children;
        if (first_children && first_children.length > 0) {
          menu[i].url = first_children[0].url;
        }
      }
      return menu;
    }
    let children_current = false; // 用于判断是否已经找到子节点
    for (const i in menu) {
      menu[i].current = false;
      if (!children_current) { // 判断是否已经查找到子节点 因为存在缓存 node不是每次都读磁盘 所以需要将其他的current置为false
        const children = menu[i].children;
        const url_obj = {
          index: -1,
          length: 0,
        };
        for (const j in children) {
          children[j].current = false;
          if (url.indexOf(children[j].url) != -1) {
            const len = children[j].url.length;
            // 判断当前url是否比上一个匹配到的url更精确
            if (url_obj.length < len) {
              // 将当前menu置为false
              menu[i].current = true;
              children[j].current = children_current = true;
              // 将上一个置为false
              if (url_obj.index >= 0) {
                children[url_obj.index].current = false;
              }

              url_obj.index = j;
              url_obj.length = len;
            }
          }
        }
      }

      // 取出第一个children的url赋值给menu
      const first_children = menu[i].children;
      if (first_children && first_children.length > 0) {
        menu[i].url = first_children[0].url;
      }
    }
    if (!children_current) {
      menu[0].current = true;
      menu[0].children[0].current = true;
    }
    return menu;
  },
};
