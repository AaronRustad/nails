(function() {
  var Mustache = require('mustache');
  var fs = require('fs');

  var viewsPath = fs.realpathSync('app/views');

  var renderer = {
    render: function(template, context, req, res, pathname) {
              fs.readFile(viewsPath + pathname, 'utf8', function(err, data) {
                  if (err && err.errno == 2) {
                    res.writeHead(404);
                    res.end("Not found");
                  } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    var html = Mustache.to_html(data, context);
                    res.end(html);
                  }
              });
            }
  };

  module.exports = renderer;
})();
