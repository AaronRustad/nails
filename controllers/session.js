var controller = require('controller');
var util = require('util');

function Session(req, res) { 
  controller.Controller.call(req,res);
}

Session.prototype.show = function() {
     this.render('show', {name: this.params.name});
};

Session.prototype.index = function() {
     this.render('index');
};

exports.instance = function(req, res) {
     return new Session(req, res);
};


