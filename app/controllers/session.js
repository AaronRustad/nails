var controller = require('controller');
var util = require('util');

function Session(req, res) { 
  controller.Controller.call(this, req, res);
}

Session.prototype = controller.Controller.prototype;

Session.prototype.show = function() {
     this.render('show', {name: this.params.name});
};

exports.controller = Session;
