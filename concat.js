var concat = require('concat-stream');
var c = concat(function(data){
  console.log(data.toString().split("").reverse().join(""));
});

process.stdin.pipe(c);
