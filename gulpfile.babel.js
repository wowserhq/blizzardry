const browserify = require('gulp-browserify');
const babel      = require('gulp-babel');
const clean      = require('gulp-rimraf');
const gulp       = require('gulp');
const mocha      = require('gulp-mocha');
const pkg        = require('./package.json');
const plumber    = require('gulp-plumber');
const rename     = require('gulp-rename');
const uglify     = require('gulp-uglify');

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

// gulp.task 'release', gulp.series 'clean', 'build', ->
//   gulp.src 'lib/index.js'
//       .pipe browserify(standalone: 'Blizzardry')
//       .pipe rename("#{pkg.name}.js")
//       .pipe header(pkg)
//       .pipe gulp.dest('dist')
//       .pipe uglify()
//       .pipe header(pkg)
//       .pipe rename("#{pkg.name}.min.js")
//       .pipe gulp.dest('dist')

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
