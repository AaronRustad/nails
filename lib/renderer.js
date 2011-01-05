var Mustache = require('mustache');
var fs = require('fs');
var renderer = null;

Renderer = function() {};

Renderer.prototype.render = function(template, context, req, res, pathname) {
  fs.readFile('./views' + pathname, 'utf8', function(err, data) {
      if (err && err.errno == 2) {
        res.writeHead(404);
        res.end("Not found");
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var html = Mustache.to_html(data, context);
        res.end(html);
      }
  });
};

exports.instance = function() {
  if (! renderer) {
    renderer = new Renderer();
  }
  return renderer;
};
