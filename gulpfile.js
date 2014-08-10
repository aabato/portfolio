var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('assets', function(){
	gulp.src('./src/assets/**/*')
		.pipe(gulp.dest('./public'));
})

gulp.task('assets:watch', function(){
	gulp.watch('./src/assets/**/*',['assets'])
})

gulp.task('stylus', function() {
	gulp.src('./src/stylus/style.styl')
		.pipe(stylus({
			use: [nib()]
		}))
		.pipe(gulp.dest('./public/css/'));
})

gulp.task('stylus:watch',function(){
	gulp.watch('./src/**/*.styl', ['stylus'])
})

gulp.task('default',['assets','assets:watch','stylus','stylus:watch']);