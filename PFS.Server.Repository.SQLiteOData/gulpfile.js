var exec = require('child_process').exec;
var gulp = require("gulp");

gulp.task("seed-db", function(cb){
    exec("node seed-db.js", function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    console.log("Seed-db: done!");    
});

gulp.task("start-odata-server", function(cb){
    exec("node odata-server.js", function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    console.log("Start-odata-server: done!")
});