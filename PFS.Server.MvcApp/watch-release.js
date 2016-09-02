var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');

var embedTemplates = require('gulp-angular-embed-templates');
var path = require('path');
var runSequence = require('run-sequence');


gulp.task('watch-app-src', function () {
    // Endless stream mode 
    watch('./App/**/*.ts', { ignoreInitial: false }, function (tsFile) {
        var tsPath = tsFile.path.replace(tsFile.base, "");
        onFileChanged(tsPath);
    });
    watch('./App/**/*.html', { ignoreInitial: false }, function (htmlFile) {
        var tsPath = htmlFile.path.replace(htmlFile.base, "").replace(".html", ".ts");
        onFileChanged(tsPath);
    });
});

function onFileChanged(filePath) {
    filePath = filePath.split('\\').join('/');
    var sourceFilePath = "./App" + filePath;
    var destFilePath = "./wwwroot/app" + filePath;
    var destFolderPath = path.dirname(destFilePath);

 gulp
         .src(sourceFilePath)
         .pipe(embedTemplates({ sourceType: 'ts' }))
         .pipe(ts({
             "target": "es5",
             "module": "commonjs",
             "moduleResolution": "node",
             "emitDecoratorMetadata": true,
             "experimentalDecorators": true,
             "noImplicitAny": false
        }))
        .pipe(gulp.dest(destFolderPath));
}

runSequence(['watch-app-src'], onFinish);

function onFinish(err) {
    if (err) { console.log(err); return; } // return error
    console.log("watch-app-src -done")
}