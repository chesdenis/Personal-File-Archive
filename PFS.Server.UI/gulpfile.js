var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

var wwwrootpaths = [
    '../PFS.AnyOS/PFS.Server/wwwroot',
    '../PFS.AnyOS/PFS.Server.Admin/wwwroot',
    '../PFS.WindowsOnly/PFS.Server/wwwroot',
    '../PFS.WindowsOnly/PFS.Server.Admin/wwwroot'
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



gulp.task('build-ui-debug', function () {

});

gulp.task('build-ui-release', function () {

});

