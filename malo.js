var fs = require('fs');
var route = require('./router').route;

exports.handle = function(req, res) {
    try {
      route(req, res);
    } catch (err) {
      res.writeHead(500);
      res.end("Server Error");
      console.log('Error: ' + err);
    }
};
