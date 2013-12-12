var split = require('split');
var through = require('through');
var linenumber = 1;

process.stdin
  .pipe(split())
  .pipe(through(function(line) {
    if (linenumber%2===0) {
      line = line.toString().toUpperCase();
    } else {
      line = line.toString().toLowerCase();
    }
    linenumber++;
    this.queue(line.toString()+"\n");
  }))
  .pipe(process.stdout)
;
