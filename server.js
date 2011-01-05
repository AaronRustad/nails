require.paths.unshift('./lib/');

var http = require('http');
var malo = require('./malo');

http.createServer(malo.handle).listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');

