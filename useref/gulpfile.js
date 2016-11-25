var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('build', function(){
	return gulp
		.src('code/index.html')
		.pipe($.useref())
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.minifyCss()))
		.pipe($.if('!*.html', $.rev()))
		.pipe(gulp.dest('build'))
		.pipe($.rev.manifest({merge: true}))
		.pipe(gulp.dest('code/assets/rev'));
});

gulp.task('clean', function(cb){
	return gulp
		.src(['build', 'code/rev'], {read: false})
		.pipe($.clean());
})
gulp.task('rev', function() {
    gulp.src(['code/assets/rev/*.json', 'build/*.html'])
        .pipe($.revCollector())
        .pipe(gulp.dest(function(file){
        	return file.base;
        }));
});

gulp.task('imagemin', function(){
	return gulp.src('code/assets/images/*')
		.pipe($.imagemin())
		.pipe(gulp.dest('build/assets/images'));
});