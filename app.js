const express = require('express');
var app = express();
var port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)

  var express = require('express');
var app = express();

});
//console.log('First');
//console.log('Second');

setTimeout(function() {
    console.log('First');
    }, 8080);
 console.log('Second');

 const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));

 app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });

  const wiki = require('./wiki.js');
  // ...
  app.use('/wiki', wiki);
 