var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');

//tr.pipe(process.stdout);
tr.select('.loud', function(span) {
  console.log(span);

  var stream = span.createStream();
  stream.end('PLACEHOLDER');
  stream.pipe(process.stdout);
});

process.stdin.pipe(tr);
