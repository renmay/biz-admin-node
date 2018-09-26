
// 自定义js

// 公共配置


$(document).ready(function() {

  // MetsiMenu
  // $('#side-menu').metisMenu();

  // 打开右侧边栏
  $('.right-sidebar-toggle').click(function() {
    $('#right-sidebar').toggleClass('sidebar-open');
  });

  // 固定菜单栏
  $(function() {
    $('.sidebar-collapse').slimScroll({
      height: '100%',
      railOpacity: 0.9,
      opacity: 0.1,
      alwaysVisible: true,
    });
    $('.nav-second-level').slimScroll({
      height: '100%',
      railOpacity: 0.9,
      opacity: 0.1,
      alwaysVisible: false,
    });
  });


  // 菜单切换
  $('.navbar-minimalize').click(function() {
    $('body').toggleClass('mini-navbar');
    SmoothlyMenu();
  });

  $('.nav li').click(function() {
    if ($(this).hasClass('mini')) {
      $('.fixed-sidebar').addClass('mini-navbar');
    } else {
      $('.fixed-sidebar').removeClass('mini-navbar');
    }
  });


  // 侧边栏高度
  function fix_height() {
    const heightWithoutNavbar = $('body > #wrapper').height() - 61;
    $('.sidebard-panel').css('min-height', heightWithoutNavbar + 'px');
  }
  fix_height();

  $(window).bind('load resize click scroll', function() {
    if (!$('body').hasClass('body-small')) {
      fix_height();
    }
  });

  // 侧边栏滚动
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
      $('#right-sidebar').addClass('sidebar-top');
    } else {
      $('#right-sidebar').removeClass('sidebar-top');
    }
  });

  $('.full-height-scroll').slimScroll({
    height: '100%',
  });

  $('#side-menu>li').click(function() {
    if ($('body').hasClass('mini-navbar')) {
      NavToggle();
    }
  });
  $('#side-menu>li li a').click(function() {
    if ($(window).width() < 769) {
      NavToggle();
    }
  });

  $('.nav-close').click(NavToggle);

  $('.i-checks').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
  });


  // ios浏览器兼容性处理
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    $('#content-main').css('overflow-y', 'auto');
  }

  /**
     * 列表页删除
     */
  $('.del').on('click', function() {
    let url = $(this).data('href'),
      id = $(this).data('id');
    layer.confirm('你确定要删除?', { icon: 3, title: '提示' }, function(index) {
      const loading = layer.load(2, { shade: [ 0.5 ] }); // 0代表加载的风格，支持0-2
      $.ajax({
        url,
        dataType: 'json',
        data: { id },
        type: 'post',
        success(data) {
          if (data.code == 200) {
            window.location.reload();
          }
          layer.close(loading);
        },
        error() {
          layer.close(loading);
          layer.msg('出错了');
        },
      });

    });
  });

  /**
     * 列表页ajax
     */
  $('table.table .ajax').on('click', function() {
    let url = $(this).data('href');
    url = url ? url : $(this).attr('href');
    let data = $(this).data('data');
    const id = $(this).data('id');

    if (!data && id) {
      data = {
        id,
      };
    }

    const message = $(this).data('message');
    let text = $(this).text();
    text = text ? text : '执行';

    layer.confirm(message ? message : '你确定要' + text + '?', { icon: 3, title: '提示' }, function(index) {
      const loading = layer.load(2, { shade: [ 0.5 ] }); // 0代表加载的风格，支持0-2
      layer.close(index);
      $.ajax({
        url,
        dataType: 'json',
        data,
        type: 'post',
        success(data) {
          if (data.code == 200) {
            window.location.reload();
          }
          layer.close(loading);
        },
        error() {
          layer.close(loading);
          layer.msg('出错了');
        },
      });

    });
  });


  /**
     * 列表页 查询按钮
     */
  $('.page-search-btn').on('click', function() {
    const result = $('.page-search-form').serializeArray();
    let data = '';
    for (let i = 0; i < result.length; i++) {
      if (result[i].value != '') {
        data += result[i].name + '=' + result[i].value + '&';
      }
    }

    if (data == '') {
      return false;
    }

    const loc = window.location.origin + window.location.pathname + '?' + data.substr(0, data.length - 1);
    window.location.href = loc;
    return false;
  });

  /**
     * 列表页重置
     */
  $('.page-reset-btn').on('click', function() {
    window.location.href = window.location.origin + window.location.pathname;
    return false;
  });

  /**
     * 批量删除
     */
  $('#batch-del-btn').on('click', function() {
    const checkbox = $("input[name='check']:checked");
    const url = $(this).data('url');
    const confirm = $(this).data('confirm');

    if (!checkbox || checkbox.size() < 1) {
      layer.msg('请选择要删除的条目');
      return;
    }

    // 批量删除最多只能是10个
    if (checkbox.size() > 10) {
      layer.msg('批量删除最多只能删除10条');
      return;
    }

    layer.confirm(confirm ? confirm : '你确定要删除?', { icon: 3, title: '提示' }, function(index) {
      const ids = new Array();
      checkbox.each(function(i, dom) {
        ids.push($(dom).val());
      });
      const loading = layer.load(2, { shade: [ 0.5 ] }); // 0代表加载的风格，支持0-2
      $.ajax({
        url,
        dataType: 'json',
        data: { id: ids },
        type: 'post',
        success(data) {
          if (data.code == 200) {
            window.location.reload();
          } else {
            layer.msg(data.message ? data.message : '出错了');
          }
        },
        error() {
          layer.msg('出错了');
        },
      });
      layer.close(loading);
    });
  });


});

$(window).bind('load resize', function() {
  if ($(this).width() < 769) {
    $('body').addClass('mini-navbar');
    $('.navbar-static-side').fadeIn();
  }
});

function NavToggle() {
  $('.navbar-minimalize').trigger('click');
}

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar')) {
    $('#side-menu').hide();
    setTimeout(
      function() {
        $('#side-menu').fadeIn(500);
      }, 100);
  } else if ($('body').hasClass('fixed-sidebar')) {
    $('#side-menu').hide();
    setTimeout(
      function() {
        $('#side-menu').fadeIn(500);
      }, 300);
  } else {
    $('#side-menu').removeAttr('style');
  }
}
function asyncSubmitForm($this) {
  let url = $this.attr('action'),
    method = $this.attr('method'),
    data = $this.serialize(),
    href = $this.data('href');
  if (!url) {
    layer.msg('系统错误');
    return;
  }
  const loading = layer.load(2, { shade: [ 0.5 ] }); // 0代表加载的风格，支持0-2
  $.ajax({
    url,
    dataType: 'json',
    data,
    type: method,
    success(result) {
      if (result.code == 200) {
        layer.msg('成功');
        if (href) {
          window.location.href = href;
        } else {
          window.location.reload();
        }
      } else {
        layer.msg(result.message ? result.message : '出错了');
      }
      layer.close(loading);
    },
    error() {
      layer.msg('出错了');
      layer.close(loading);
    },
  });
}


function modalFormSubmit($this) {
  let url = $this.attr('action'),
    method = $this.attr('method'),
    data = $this.serialize(),
    href = $this.data('href');
  if (!url) {
    layer.msg('系统错误');
    return;
  }

  const loading = layer.load(2, { shade: [ 0.5 ] }); // 0代表加载的风格，支持0-2

  $.ajax({
    url,
    data,
    type: method,
    dataType: 'json',
    success(result) {
      if (result.code == 200) {
        layer.msg(result.message ? result.message : '提交成功');
        $('.modal').modal('hide');
      } else {
        layer.msg(result.message ? result.message : '出错了');
      }
      layer.close(loading);
    },
    error() {
      layer.msg('出错了');
      layer.close(loading);
    },
  });
}
