var gulp = require('gulp');
var ts = require('gulp-typescript');
var embedTemplates = require('gulp-angular-embed-templates');
var runSequence = require('run-sequence');

gulp.task('build-systemjs', buildSystemJs);
gulp.task('build-release', buildRelease);

var tsConfig = {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "noImplicitAny": false
        };

function buildSystemJs() {
    gulp
       .src('./systemjs.config.ts')
       .pipe(ts(tsConfig))
       .pipe(gulp.dest('./wwwroot/'));
}

function buildRelease() {
    gulp
       .src('./App/**/*.ts')
       .pipe(embedTemplates({ sourceType: 'ts' }))
       .pipe(ts(tsConfig))
       .pipe(gulp.dest('./wwwroot/app'));
}


runSequence(
    [
        'build-systemjs',
        'build-release',
    ], onFinish);

function onFinish(err) {
    if (err) { console.log(err); return; } // return error
    console.log("build-release -done")
}