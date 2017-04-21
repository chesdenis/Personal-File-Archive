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

gulp.task('packages-install', function () {
    var shimSrc = gulp.src('./node_modules/core-js/client/*.js');
    var zoneSrc = gulp.src('./node_modules/zone.js/dist/*.js');
    var reflectSrc = gulp.src('./node_modules/reflect-metadata/*.js');
    var systemJsSrc = gulp.src('./node_modules/systemjs/dist/*.js');
    var angular2Src = gulp.src('./node_modules/@angular/**/*.js');
    var angular2InMemoryWebApiSrc = gulp.src('./node_modules/angular2-in-memory-web-api/**/*.js');
    var rxJsSrc = gulp.src('./node_modules/rxjs/**/*.js');
    var bootstrapSrc = gulp.src('./node_modules/bootstrap/dist/**');
    var jaydataSrc = gulp.src('./node_modules/jaydata/public/**');
    var datajsSrc = gulp.src('./node_modules/datajs/lib/**');
     

    return merge([
           shimSrc.pipe(gulp.dest("wwwroot/npmlibs/core-js/client/"))
           , zoneSrc.pipe(gulp.dest("wwwroot/npmlibs/zone.js/dist/"))
           , reflectSrc.pipe(gulp.dest("wwwroot/npmlibs/reflect-metadata/"))
           , systemJsSrc.pipe(gulp.dest("wwwroot/npmlibs/systemjs/dist/"))
           , angular2Src.pipe(gulp.dest("wwwroot/npmlibs/@angular/"))
           , angular2InMemoryWebApiSrc.pipe(gulp.dest("wwwroot/npmlibs/angular2-in-memory-web-api/"))
           , rxJsSrc.pipe(gulp.dest("wwwroot/npmlibs/rxjs/"))
           , bootstrapSrc.pipe(gulp.dest("wwwroot/npmlibs/bootstrap/"))
           , jaydataSrc.pipe(gulp.dest("wwwroot/npmlibs/jaydata/"))
           , datajsSrc.pipe(gulp.dest("wwwroot/npmlibs/datajs/"))
    ]);
});

gulp.task('packages-apply', ['packages-install'], function () {
    var npmLibs = gulp.src('./wwwroot/npmLibs/**');
    return merge([
        npmLibs.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/npmLibs")),
        npmLibs.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/npmLibs")),
        npmLibs.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/npmLibs")),
        npmLibs.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/npmLibs"))
    ]);
});


var ts = require('gulp-typescript');
var less = require('gulp-less');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('ui-build-debug', function () {
    var tsResults = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({
                sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
        }
    }));

    var lessResults = gulp.src(['./**/*.less', '!node_modules/**', '!wwwroot/**'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write());

    var htmlResults = gulp.src(['./**/*.html', '!node_modules/**', '!wwwroot/**']);
    var cssResults = gulp.src(['./**/*.css', '!node_modules/**', '!wwwroot/**']);
    var jsResults = gulp.src(['./**/*.js', '!node_modules/**', '!wwwroot/**', '!gulpfile.js']);

    return merge([
        tsResults.pipe(gulp.dest("wwwroot/"))
        , htmlResults.pipe(gulp.dest("wwwroot/"))
        , cssResults.pipe(gulp.dest("wwwroot/"))
        , jsResults.pipe(gulp.dest("wwwroot/"))
        , lessResults.pipe(gulp.dest("wwwroot/"))
]);
});

gulp.task('ui-build-release', function () {
    var tsResults = tsProject.src()
           .pipe(tsProject());

    var lessResults = gulp.src(['./**/*.less', '!node_modules/**', '!wwwroot/**'])
        .pipe(less());

    var htmlResults = gulp.src(['./**/*.html', '!node_modules/**', '!wwwroot/**']);
    var cssResults = gulp.src(['./**/*.css', '!node_modules/**', '!wwwroot/**']);
    var jsResults = gulp.src(['./**/*.js', '!node_modules/**', '!wwwroot/**', '!gulpfile.js']);

    return merge([
        tsResults.pipe(gulp.dest("wwwroot/"))
        , htmlResults.pipe(gulp.dest("wwwroot/"))
        , cssResults.pipe(gulp.dest("wwwroot/"))
        , jsResults.pipe(gulp.dest("wwwroot/"))
        , lessResults.pipe(gulp.dest("wwwroot/"))
]);
});

gulp.task('ui-apply',['ui-build-debug'], function () {
    var pfsServerFiles = gulp.src('./wwwroot/Apps/PFS.Server/**');
    var pfsServerAdminFiles = gulp.src('./wwwroot/Apps/PFS.Server.Admin/**');
    var contextsFiles = gulp.src('./wwwroot/Contexts/**');
    var controlsFiles = gulp.src('./wwwroot/Controls/**');
    var systemJs = gulp.src('./wwwroot/systemjs.config.js');
   

    return merge([
        pfsServerFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot")),
        pfsServerAdminFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot")),
        pfsServerFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot")),
        pfsServerAdminFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot")),

        contextsFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/Contexts")),
        contextsFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/Contexts")),
        contextsFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/Contexts")),
        contextsFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/Contexts")),

        controlsFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/Controls")),
        controlsFiles.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/Controls")),
        controlsFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/Controls")),
        controlsFiles.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/Controls")),

        systemJs.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/")),
        systemJs.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/")),
        systemJs.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/")),
        systemJs.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/")),
]);
});


var watch = require('gulp-watch');
var debug = require('gulp-debug');
var livereload = require('gulp-livereload');

gulp.task('run-livereload', function () {
    livereload.listen();
});

gulp.task('watch-controls-html', function () {
    return watch(['./Controls/**/*.html'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server.Admin/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/Controls/'))
        .pipe(livereload());
});

gulp.task('watch-pfs-server-html', function () {
    return watch(['./Apps/PFS.Server/**/*.html'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server/wwwroot/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server/wwwroot/'))
        .pipe(livereload());
});

gulp.task('watch-pfs-server-admin-html', function () {
    return watch(['./Apps/PFS.Server.Admin/**/*.html'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server.Admin/wwwroot/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/'))
        .pipe(livereload());
});


gulp.task('watch-controls-less', function () {
    return watch(['./Controls/**/*.less'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server.Admin/wwwroot/Controls/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/Controls/'))
        .pipe(livereload());
});

gulp.task('watch-pfs-server-less', function () {
    return watch(['./Apps/PFS.Server/**/*.less'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server/wwwroot/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server/wwwroot/'))
        .pipe(livereload());
});

gulp.task('watch-pfs-server-admin-less', function () {
    return watch(['./Apps/PFS.Server.Admin/**/*.less'], { ignoreInitial: false })
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../PFS.AnyOS/PFS.Server.Admin/wwwroot/'))
        .pipe(gulp.dest('../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/'))
        .pipe(livereload());
});

gulp.task('watch-controls', [
    'watch-controls-html',
    'watch-controls-less'
]);

gulp.task('watch-pfs-server', [
    'watch-pfs-server-html',
    'watch-pfs-server-less'
]);

gulp.task('watch-pfs-server-admin', [
    'watch-pfs-server-admin-html',
    'watch-pfs-server-admin-less'
]);

var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
    runSequence('packages-apply',
                'ui-apply',
                ['watch-controls',
                'watch-pfs-server',
                'watch-pfs-server-admin'],
                callback);
});

