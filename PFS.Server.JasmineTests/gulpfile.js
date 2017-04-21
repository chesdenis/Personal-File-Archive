var gulp = require('gulp');
var merge = require('merge2');
var exec = require('child_process').exec;

var wwwrootpaths = [
    '../PFS.AnyOS/PFS.Server/wwwroot',
    '../PFS.AnyOS/PFS.Server.Admin/wwwroot',
    '../PFS.WindowsOnly/PFS.Server/wwwroot',
    '../PFS.WindowsOnly/PFS.Server.Admin/wwwroot',
    'wwwroot'
];

gulp.task("packages-install", function () {
    var jasmineSrc = gulp.src('./node_modules/jasmine-core/lib/jasmine-core/*');
    var jaydataSrc = gulp.src(['./node_modules/jaydata/public/**',  ]);
    var datajsSrc = gulp.src('./node_modules/datajs/lib/**');

    return merge([
      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/libs/jasmine-core")),
      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/libs/jasmine-core")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/libs/jasmine-core")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/libs/jasmine-core")),

      jaydataSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/libs/jaydata")),
      jaydataSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/libs/jaydata")),
      jaydataSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/libs/jaydata")),
      jaydataSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/libs/jaydata")),

      datajsSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/libs/datajs")),
      datajsSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/libs/datajs")),
      datajsSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/libs/datajs")),
      datajsSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/libs/datajs")),
    ]);
});

gulp.task("tests-apply", function () {
  
    var jasmineSpec = gulp.src('./Jasmine/spec/**');
    var jasmineSrc = gulp.src('./Jasmine/src/**');
    var jasmineCustomizations = gulp.src('./Jasmine/custom/jasmine-html.js');

    return merge([
      jasmineSpec.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/spec")),

      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/src")),

      jasmineCustomizations.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/libs/jasmine-core")),
      jasmineCustomizations.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/libs/jasmine-core")),
      jasmineCustomizations.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/libs/jasmine-core")),
      jasmineCustomizations.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/libs/jasmine-core")),

    ]);
});