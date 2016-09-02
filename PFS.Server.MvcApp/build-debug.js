var gulp = require('gulp');
var ts = require('gulp-typescript');
var embedTemplates = require('gulp-angular-embed-templates');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var runSequence = require('run-sequence');


gulp.task('build-systemjs', buildSystemJs);
gulp.task('build-debug', buildDebug);

function buildSystemJs() {
    gulp
       .src('./app/systemjs.config.js')
       .pipe(gulp.dest('./wwwroot/'));
}

function buildDebug() {

    gulp
        .src('./App/**/*.ts')
		.pipe(embedTemplates({ sourceType: 'ts' }))
        .pipe(sourcemaps.init())
        .pipe(ts({
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "noImplicitAny": false
        }))
        .pipe(sourcemaps.write({
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest('./wwwroot/app'));
}


runSequence(
    [
        'build-systemjs',
        'build-debug'
    ], onFinish);

function onFinish(err) {
    if (err) { console.log(err); return; } // return error
    console.log("build-debug -done")
}