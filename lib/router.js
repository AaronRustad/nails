(function() {
  var _ = require('underscore');
  var fs = require('fs');

  var controllers = [];
  
  var setupControllers = function() {
    var controllersPath = fs.realpathSync('app/controllers');
    _.each(fs.readdirSync(controllersPath), function(file) {
       var name = file.split('.')[0];
       controllers[name] = require(controllersPath + '/' + file).controller;
    });
  };

  var router = {
    route: 
     function(req, res) {
        if (controllers.length === 0) {
          setupControllers();
        }
        var requestParts = require('url').parse(req.url, true);
        
        var controllerName = requestParts.pathname.slice(1).split('/')[0];
        var action = requestParts.pathname.slice(1).split('/')[1];
        
        var controller = controllers[controllerName];
        if (controller) {
          var instance = new controller(req, res);
          if (typeof instance[action] === 'function') {
            instance[action]();
          } else {
            res.writeHead(404);
            res.end('Not found');
          }
        } else {
            res.writeHead(404);
            res.end('Not found');
        }
     }
  };

  module.exports = router;
})();
