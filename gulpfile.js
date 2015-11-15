const babel = require('gulp-babel');
const cache = require('gulp-cached');
const del = require('del');
const gulp = require('gulp');
const mocha = require('gulp-spawn-mocha');
const plumber = require('gulp-plumber');

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
  return gulp.src('spec/**/*.js', { read: false })
    .pipe(plumber())
    .pipe(mocha({ bail: true }));
});

gulp.task('rebuild', gulp.series(
  'clean', 'build'
));

gulp.task('watch', function(done) {
  gulp.watch('src/**/*.js', gulp.series(
    'build', 'spec'
  ));
  done();
});

gulp.task('default', gulp.series(
  'rebuild', 'spec', 'watch'
));
