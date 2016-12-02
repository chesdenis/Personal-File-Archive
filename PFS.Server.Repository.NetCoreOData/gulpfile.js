var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('dotnet-ef-database-update', function (cb) {
    exec('dotnet ef database update', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dotnet-ef-database-drop-force', function (cb) {
    exec('dotnet ef database drop -f', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dotnet-ef-dbcontext-list', function (cb) {
    exec('dotnet ef dbcontext list', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dotnet-ef-migrations-addonly', function (cb) {

    exec('dotnet ef migrations add "PfsDbMigration"', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dotnet-ef-migrations-add', ['dotnet-ef-migrations-remove'], function (cb) {

    exec('dotnet ef migrations add "PfsDbMigration"', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dotnet-ef-migrations-remove', function (cb) {

    exec('dotnet ef migrations remove -f', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

