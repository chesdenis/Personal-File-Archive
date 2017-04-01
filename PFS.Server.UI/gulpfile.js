var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var debug = require('gulp-debug');

var wwwrootpaths = [
    '../PFS.AnyOS/PFS.Server/wwwroot',
    '../PFS.AnyOS/PFS.Server.Admin/wwwroot',
    '../PFS.WindowsOnly/PFS.Server/wwwroot',
    '../PFS.WindowsOnly/PFS.Server.Admin/wwwroot',
    'wwwroot'
];

gulp.task('clean-wwwroot', function () {
    for (var i = 0; i < wwwrootpaths.length; i++) {
        new Promise(function (resolve, reject) {
            var pathToClear = wwwrootpaths[i] + "/*";
            gulp.src(pathToClear, { read: false })
                .pipe(clean({ force: true }))
                .on('end', resolve(pathToClear));
        }).then(function (pathToClear) {
            gutil.log("Folder " + pathToClear + " was cleared");
        });
    }
});

gulp.task('install-packages', function () {
    for (var i = 0; i < wwwrootpaths.length; i++) {
        installShim(wwwrootpaths[i]);
        installZone(wwwrootpaths[i]);
        installReflect(wwwrootpaths[i]);
        installSystemJs(wwwrootpaths[i]);
        installAngular2(wwwrootpaths[i]);
        installAngular2InMemoryWebApi(wwwrootpaths[i]);
        installRxJs(wwwrootpaths[i]);
        installBootstrap(wwwrootpaths[i]);
        installJaydata(wwwrootpaths[i]);
        installDataJs(wwwrootpaths[i]);
    }
});

function installShim(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/core-js/client/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/core-js/client/'))
            .on('end', resolve(pathToInstall));
    }).then(function () {
        gutil.log("Shim was installed to " + pathToInstall);
    });
}

function installZone(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/zone.js/dist/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/zone.js/dist/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Zone was installed to " + pathToInstall);
    });
}

function installReflect(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/reflect-metadata/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/reflect-metadata/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Reflect was installed to " + pathToInstall);
    });
}

function installSystemJs(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/systemjs/dist/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/systemjs/dist/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("SystemJs was installed to " + pathToInstall);
    });
}

function installAngular2(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/@angular/**/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/@angular/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Angular2 was installed to " + pathToInstall);
    });
}

function installAngular2InMemoryWebApi(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/angular2-in-memory-web-api/**/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/angular2-in-memory-web-api/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Angular2InMemoryWebApi was installed to " + pathToInstall);
    });
}

function installRxJs(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/rxjs/**/*.js')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/rxjs/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("RxJs was installed to " + pathToInstall);
    });
}

function installBootstrap(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/bootstrap/dist/**')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/bootstrap/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Bootstrap was installed to " + pathToInstall);
    });
}

function installJaydata(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/jaydata/public/**')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/jaydata/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("Jaydata was installed to " + pathToInstall);
    });
}

function installDataJs(pathToInstall) {
    new Promise(function (resolve, reject) {
        gulp.src('./node_modules/datajs/lib/**')
            .pipe(gulp.dest(pathToInstall + '/npmlibs/datajs/'))
            .on('end', resolve(pathToInstall));
    }).then(function (pathToInstall) {
        gutil.log("DataJs was installed to " + pathToInstall);
    });
}

var ts = require('gulp-typescript');
var less = require('gulp-less');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var tsProject = ts.createProject("tsconfig.json");


gulp.task('build-ui-debug', function () {
   
});

gulp.task('compile-ui-debug', function () {
    var tsResults = tsProject.src('./Apps/')
             .pipe(sourcemaps.init())
             .pipe(tsProject());
             //.pipe(sourcemaps.write({
             //    sourceRoot: function (file) {
             //        var sourceFile = path.join(file.cwd, file.sourceMap.file);
             //        return path.relative(path.dirname(sourceFile), file.cwd);
             //    }
             //}));

    var lessResults = gulp.src(['./**/*.less', '!node_modules/**'])
            .pipe(less());
    var htmlResults = gulp.src(['./**/*.html', '!node_modules/**']);
    var cssResults = gulp.src(['./**/*.css', '!node_modules/**']);
    var jsResults = gulp.src(['./**/*.js', '!node_modules/**']);

    return merge([
        tsResults.js.pipe(gulp.dest("wwwroot/"))
        , htmlResults.pipe(gulp.dest("wwwroot/"))
    ]);
    // .pipe(gulp.dest('wwwroot/'));
});

function buildTsDebug() {
   

    //new Promise(function (resolve, reject) {

    //    tsProject.src()
    //        .debug()
    //        .pipe(sourcemaps.init())
    //        .pipe(tsProject())
    //        .pipe(sourcemaps.write({
    //            sourceRoot: function (file) {
    //                var sourceFile = path.join(file.cwd, file.sourceMap.file);
    //                return path.relative(path.dirname(sourceFile), file.cwd);
    //            }
    //        }))
    //        .pipe(gulp.dest(pathToOutput + '/'))
    //        .on('end', resolve(pathToOutput));
    //}).then(function (pathToOutput) {
    //    gutil.log("systemjs.config.ts was built to " + pathToOutput);
    //});
}

function buildHtml() {

}

function buildCss() {

}

function buildJs() {

}

function buildLessDebug() {

}

function buildTsDebug() {

}

gulp.task('build-ui-release', function () {

});

gulp.task('watch-ui-debug', function () {

});

gulp.task('watch-ui-release', function () {

});

