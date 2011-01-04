var Mustache = require('mustache');
var fs = require('fs');

exports.Controller = function (req, res) {
  this.request = req;
  this.response = res;

  var request = require('url').parse(req.url, true);
  this.params     = request.query;
  this.pathname   = request.pathname;
}

exports.Controller.prototype.render = function(template, context) {
  console.log('here');
  var self = this;
  fs.readFile('./views' + this.pathname, 'utf8', function(err, data) {
      if (err && err.errno == 2) {
        self.response.writeHead(404);
        self.response.end("Not found");
      } else {
        self.response.writeHead(200, {'Content-Type': 'text/plain'});
        var html = Mustache.to_html(data, context);
        self.response.end(html);
      }
  });
};
