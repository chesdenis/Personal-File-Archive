var dbFolder = "./db";
var dbFile = dbFolder + "/pfs.db";

var fs = require("fs");
var dbFolderExists = fs.existsSync(dbFolder);
var dbFileExists = fs.existsSync(dbFile);

if(!dbFolderExists){
    fs.mkdirSync(dbFolder);
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbFile);

db.serialize(function () {
    if (!dbFileExists) {
        db.run("CREATE TABLE Tags (name TEXT)");

        var stmt = db.prepare("INSERT INTO Tags VALUES (?)");

        stmt.run("Name #1");
        stmt.run("Name #2");
        stmt.run("Name #3");

        stmt.finalize();
    }
});

db.close();