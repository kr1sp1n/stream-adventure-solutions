var through = require('through');
var http = require('http');

var port = process.argv[2];

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

var server = http.createServer( function (req, res) {
  req.pipe(through(write)).pipe(res);
});

server.listen(port);
