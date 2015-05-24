const babel   = require('gulp-babel');
const clean   = require('gulp-rimraf');
const gulp    = require('gulp');
const mocha   = require('gulp-mocha');
const plumber = require('gulp-plumber');

gulp.task('clean', function() {
  return gulp.src([
    'dist/*',
    'lib/*',
    'spec/**/*.js'
  ]).pipe(clean());
});

gulp.task('build', function() {
  return gulp.src('src/**/*.js')
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
