var gulp      = require('gulp'),
    $         = require('gulp-load-plugins')(),
    cleanCSS  = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    imagemin  = require('gulp-imagemin'),
    concat    = require('gulp-concat'),
    sass = require('gulp-sass');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['assets/scss/**/*.scss'], ['sass']);
});
