var renderer = require('renderer').instance();

exports.Controller = function (req, res) {
  this.request = req;
  this.response = res;

  var request     = require('url').parse(req.url, true);
  this.params     = request.query;
  this.pathname   = request.pathname;
};

exports.Controller.prototype.render = function(template, context) {
  renderer.render(template, context, this.request, this.response, this.pathname);
};

