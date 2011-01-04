var _ = require('underscore');
var fs = require('fs');

Router = function() {
  this.controllers = [];
};

Router.prototype._route = function(req, res) {
  if (this.controllers.length === 0) {
    this._setupControllers();
  }
  var requestParts = require('url').parse(req.url, true);
  
  var controllerName = requestParts.pathname.slice(1).split('/')[0];
  var action = requestParts.pathname.slice(1).split('/')[1];
  
  var controller = this.controllers[controllerName](req,res);
  if (typeof controller[action] === 'function') {
    controller[action](); 
  } else {
    this._render404(res);
  }
};

Router.prototype._render404 = function(res) {
    res.writeHead(404);
    res.end('Not found');
};

Router.prototype._setupControllers = function() {
  _.each(fs.readdirSync('./controllers'), function(file) {
     var name = file.split('.')[0];
     var controller = require('./controllers/' + file);

     this.controllers[name] = controller.instance;
     console.log(this.controllers);
  }, this);
};

var router = new Router();

exports.route = function(req, res) {
  router._route(req, res);
//  var request = require('url').parse(req.url, true);
};