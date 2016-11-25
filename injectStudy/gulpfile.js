'use strict'
var gulp = require("gulp"),
    injectString = require("gulp-inject-string"),
    del = require("del");

var time = (new Date()).toLocaleDateString(),
    copyright = '/* Created by RosApr on ' + time + ' */\n';

gulp.task("inject:prepend", function(){
	gulp.src(["assets/js/*.js", "assets/css/*.css"], {base: "./"})
		.pipe(injectString.prepend(copyright))
        .pipe(gulp.dest("./"));
});
gulp.task("clean", function(cb){
	del("/dist/*/*");
	cb();
});