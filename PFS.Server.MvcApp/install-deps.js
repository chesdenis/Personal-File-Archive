var gulp = require('gulp');
var runSequence = require('run-sequence');

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "npmlibs/";

gulp.task("install-shim", install_shim);
gulp.task("install-zone", install_zone);
gulp.task("install-reflect", install_reflect);
gulp.task("install-system", install_system);

gulp.task("install-angular", install_angular);

gulp.task("install-deps",
["install-shim"
, "install-zone"
, "install-reflect"
, "install-system"
, "install-angular"
]);


function install_shim() {
    gulp
    .src(paths.npmSrc + '/core-js/client/*.js')
    .pipe(gulp.dest(paths.npmLibs + '/core-js/client/'));
}

function install_zone() {
    gulp
    .src(paths.npmSrc + '/zone.js/dist/*.js')
    .pipe(gulp.dest(paths.npmLibs + '/zone.js/dist/'));
}

function install_reflect() {
    gulp
    .src(paths.npmSrc + '/reflect-metadata/*.js')
    .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
}

function install_system() {
    gulp
    .src(paths.npmSrc + '/systemjs/dist/*.js')
    .pipe(gulp.dest(paths.npmLibs + '/systemjs/dist/'));
}

function install_angular() {
    gulp
    .src(paths.npmSrc + '/@angular/**')
    .pipe(gulp.dest(paths.npmLibs + '/@angular/'));

    gulp
    .src(paths.npmSrc + '/angular2-in-memory-web-api/**')
    .pipe(gulp.dest(paths.npmLibs + '/angular2-in-memory-web-api/'));

    gulp
    .src(paths.npmSrc + '/rxjs/**')
    .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
}

runSequence('install-deps', onFinish);

function onFinish(err) {
    if (err) { console.log(err); return; } // return error
    console.log("install-deps -done")
}