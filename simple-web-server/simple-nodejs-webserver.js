
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
 
app.use(bodyParser.json());

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
});

app.post('/samplePost', function(req,res){

  console.log(req.body);

 var dataToAnswer = req.body;
 dataToAnswer.message = "Hello client_" + (req.body.count + 1);
 dataToAnswer.count = req.body.count + 1;

  res.send(dataToAnswer);

});

app.use('/pages', express.static(__dirname+'/pages'));
 
app.listen(3000, function () {
  console.log("Server started sucessfully...");
})