var gulp = require('gulp');
var merge = require('merge2');

var wwwrootpaths = [
    '../PFS.AnyOS/PFS.Server/wwwroot',
    '../PFS.AnyOS/PFS.Server.Admin/wwwroot',
    '../PFS.WindowsOnly/PFS.Server/wwwroot',
    '../PFS.WindowsOnly/PFS.Server.Admin/wwwroot',
    'wwwroot'
];

gulp.task("jasmine-install", function () {
    var jasminePackages = gulp.src('./Jasmine/lib/**');
  
    return merge([
      jasminePackages.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/lib")),
      jasminePackages.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/lib")),
      jasminePackages.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/lib")),
      jasminePackages.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/lib"))
    ]);
});

gulp.task("jasmine-tests-apply", function () {
  
    var jasmineSpec = gulp.src('./Jasmine/spec/**');
    var jasmineSrc = gulp.src('./Jasmine/src/**');

    return merge([
      jasmineSpec.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/spec")),
      jasmineSpec.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/spec")),

      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.AnyOS/PFS.Server.Admin/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server/wwwroot/jasmine/src")),
      jasmineSrc.pipe(gulp.dest("../PFS.WindowsOnly/PFS.Server.Admin/wwwroot/jasmine/src"))
    ]);
});