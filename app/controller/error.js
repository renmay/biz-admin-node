'use strict';

exports._40x = function* (ctx) {
  yield this.render('404.html');
};

exports._50x = function* (ctx) {
  yield this.render('500.html');
};

exports.error = function* (ctx) {
  yield this.render('error.html');
};

