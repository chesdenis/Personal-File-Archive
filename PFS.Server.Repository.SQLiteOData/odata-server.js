var express = require('express');
var app = express();

var file = "./db/pfs.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

var ODataServer = require("simple-odata-server");

var model = require("./model.js");
var sqliteAdapter = require("./sqliteAdapter.js");

function decoreODataServerByAdapter(odataServer, adapter, getDB){
    adapter(odataServer, getDB);
    return odataServer;
}
 
var odataServer = ODataServer()
    .model(model);

decoreODataServerByAdapter(odataServer, sqliteAdapter, function(es, cb) { cb(null, db)});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use("/odata", function (req, res) {
        db = new sqlite3.Database(file);
        odataServer.handle(req, res);
        db.close();
    });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
