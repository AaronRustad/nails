var fs = require('fs');
var router = require('./router');

exports.handle = function(req, res) {
//    var request = require('url').parse(req.url, true);

    router.route(req, res);

//    fs.readFile('./views' + request.pathname, 'utf8', function(err, data) {
//      if (err && err.errno == 2) {
//        res.writeHead(404);
//        res.end("Not found");
//      } else {
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        console.log(data);
////        var html = Mustache.to_html(data, {name:request.query.name});
////        var html = Mustache.to_html(data, {name:"aaron"});
//        res.end('here');
////        res.end(data);
//      }
//    });
};
