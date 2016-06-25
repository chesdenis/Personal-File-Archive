
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  console.log("Someone get to the server by root path...");

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip);

  res.send('Hello World');
});

app.get('/testroute', function (req, res) {

  console.log("Someone get to the server by /testroute path...");

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip);

  res.send('testroute');
})
 
app.listen(3000, function () {
  console.log("Server started sucessfully...");
})