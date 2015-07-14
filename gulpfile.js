var babel   = require('gulp-babel');
var cache   = require('gulp-cached');
var del     = require('del');
var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var plumber = require('gulp-plumber');

gulp.task('clean', function(cb) {
  return del([
    'lib/*',
    'spec/**/*.js'
  ], cb);
});

gulp.task('build', function() {
  return gulp.src('src/**/*.js')
    .pipe(cache('babel'))
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('.'));
});

gulp.task('spec', function() {
  return gulp.src('spec/**/*.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({bail: true}));
});

gulp.task('rebuild', gulp.series(
  'clean', 'build'
));

gulp.task('watch', function() {
  return gulp.watch('src/**/*.js', gulp.series(
    'build', 'spec'
  ));
});

gulp.task('default', gulp.series(
  'rebuild', 'spec', 'watch'
));
