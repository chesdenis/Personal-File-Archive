var gulp = require('gulp');
var runSequence = require('run-sequence');

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "npmlibs/";

gulp.task("copy-deps:core-js", function () {
    return gulp.src(paths.npmSrc + '/core-js/client/*')
         .pipe(gulp.dest(paths.npmLibs + '/core-js/client/'));
});

gulp.task("copy-deps:zone-js", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/*')
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/dist/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*')
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/*')
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/dist/'));
});

gulp.task("copy-deps:angular", function () {
    return gulp.src(paths.npmSrc + '/@angular/**')
         .pipe(gulp.dest(paths.npmLibs + '/@angular/'));
});

gulp.task("copy-deps:angular2-in-memory-web-api", function () {
    return gulp.src(paths.npmSrc + '/angular2-in-memory-web-api/**')
         .pipe(gulp.dest(paths.npmLibs + '/angular2-in-memory-web-api/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**')
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});
 
gulp.task("copy-deps",
     [
         'copy-deps:core-js',
         'copy-deps:zone-js',
         'copy-deps:reflect-metadata',
         'copy-deps:systemjs',

         'copy-deps:angular',
         'copy-deps:angular2-in-memory-web-api',
         'copy-deps:rxjs'
     ]);

runSequence('copy-deps', function(err) {
    if (err) {console.log(err); return;} // return error
    console.log("copy-deps done!")
  });