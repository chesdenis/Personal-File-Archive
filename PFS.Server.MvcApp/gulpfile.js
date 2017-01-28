var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot/*', { read: false })
        .pipe(clean());
});

gulp.task('clean-app', function () {
    return gulp.src('wwwroot/App/*', { read: false })
        .pipe(clean());
});

gulp.task("build-shim", function () {
    gulp
        .src("./node_modules/" + '/core-js/client/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/core-js/client/'));
});


gulp.task("build-zone", function () {
    gulp
        .src("./node_modules/" + '/zone.js/dist/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/zone.js/dist/'));
});

gulp.task("build-reflect", function () {
    gulp
        .src("./node_modules/" + '/reflect-metadata/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/reflect-metadata/'));
});

gulp.task("build-systemjs", function () {
    gulp
        .src("./node_modules/" + '/systemjs/dist/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/systemjs/dist/'));
});

gulp.task("build-angular", function () {
    gulp
        .src("./node_modules/" + '/@angular/**/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/@angular/'));

    gulp
        .src("./node_modules/" + '/angular2-in-memory-web-api/**/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/angular2-in-memory-web-api/'));

    gulp
        .src("./node_modules/" + '/rxjs/**/*.js')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/rxjs/'));
});

gulp.task("build-bootstrap", function () {
    gulp
        .src("./node_modules/" + '/bootstrap/dist/**')
        .pipe(gulp.dest("wwwroot/npmlibs" + '/bootstrap/'));
});

gulp.task('install-deps', [
    "build-shim"
    , "build-zone"
    , "build-reflect"
    , "build-systemjs"
    , "build-angular"
    , "build-bootstrap"
]);


var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var tsProject = ts.createProject("tsconfig.json");


gulp.task('build-systemjs-config-debug', function () {
    return tsProject.src('./systemjs.config.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('build-systemjs-config-release', function () {
    return tsProject.src('./systemjs.config.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('build-html', function () {
    return gulp.src('./App/**/*.html')
        .pipe(gulp.dest('./wwwroot/App'));
});

gulp.task('build-css', function () {
    return gulp.src('./App/**/*.css')
        .pipe(gulp.dest('./wwwroot/App'));
});

gulp.task('build-ts-debug', function () {
    return tsProject.src('./App/')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('build-ts-release', function () {
    return tsProject.src('./App/')
        .pipe(tsProject())
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('build-app-debug', [
    'build-html',
    'build-css',
    'build-ts-debug'
]);

gulp.task('build-app-release', [
    'build-html',
    'build-css',
    'build-ts-release'
]);

var watch = require('gulp-watch');
var debug = require('gulp-debug');

gulp.task('watch-html', function () {
    return watch('./App/**/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('./wwwroot/App'));
});

gulp.task('watch-css', function () {
    return watch('./App/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('./wwwroot/App'));
});

gulp.task('watch-ts-multi-compile', function () {
    return gulp.src(["./App/**/*.ts",
                    './node_modules/@types/core-js/index.d.ts',
                    './node_modules/@types/jasmine/index.d.ts',
                    './node_modules/@types/node/index.d.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        //.pipe(debug())
        .pipe(sourcemaps.write({
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest('./wwwroot/App'));
});

gulp.task('watch-ts-multi',
    ['watch-ts-multi-compile'],
    function () {
        gulp.watch("./App/**/*.ts", ['watch-ts-multi-compile'])
});

gulp.task('watch-ts-single', function () {
    return watch('./App/**/*.ts', function (vinyl) {
        var filePath = "./App/" + vinyl.relative.split('\\').join('/');
        gulp.src([
            filePath,
                    './node_modules/@types/core-js/index.d.ts',
                    './node_modules/@types/jasmine/index.d.ts',
                    './node_modules/@types/node/index.d.ts'
        ])
            //.pipe(debug())
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            //.pipe(debug())
            .pipe(sourcemaps.write({
                sourceRoot: function (file) {
                    var sourceFile = path.join(file.cwd, file.sourceMap.file);
                    return path.relative(path.dirname(sourceFile), file.cwd);
                }
            }))
            .pipe(gulp.dest('./wwwroot/App'));
    });
});

gulp.task('watch-all', [
    'watch-html',
    'watch-css',
    'watch-ts-multi'
]);
