"use strict"
var gulp = require("gulp"),
    less = require("gulp-less"),
    minifycss = require("gulp-minify-css"),
    autoprefixer = require("gulp-autoprefixer"),
    postcss = require("gulp-postcss"),
    px2rem = require("postcss-px2rem"),
    processors = [px2rem({remUnit: 75})];

    gulp.task("less", function(){
        gulp.src("less/*.less")
            .pipe(less())
            .pipe(postcss(processors))
            .pipe(autoprefixer({
              browsers: ["last 2 versions", "Android >= 4.0"],
              cascade: true,
              remove: true
            }))
            .pipe(gulp.dest("assets/css"))
    });