browserify = require('gulp-browserify')
clean      = require('gulp-rimraf')
coffee     = require('gulp-coffee')
gulp       = require('gulp')
header     = require('./header')
mocha      = require('gulp-mocha')
pkg        = require('./package.json')
plumber    = require('gulp-plumber')
rename     = require('gulp-rename')
uglify     = require('gulp-uglify')

gulp.task 'clean', ->
  gulp.src([
    'dist/*',
    'lib/*',
    'spec/**/*.js'
  ]).pipe clean()

gulp.task 'build', ->
  gulp.src 'src/**/*.coffee'
      .pipe plumber()
      .pipe coffee(bare: true)
      .pipe gulp.dest('.')

gulp.task 'spec', ->
  gulp.src 'spec/**/*.js', read: false
      .pipe plumber()
      .pipe mocha(bail: true)

# gulp.task 'release', gulp.series 'clean', 'build', ->
#   gulp.src 'lib/index.js'
#       .pipe browserify(standalone: 'Blizzardry')
#       .pipe rename("#{pkg.name}.js")
#       .pipe header(pkg)
#       .pipe gulp.dest('dist')
#       .pipe uglify()
#       .pipe header(pkg)
#       .pipe rename("#{pkg.name}.min.js")
#       .pipe gulp.dest('dist')

gulp.task 'rebuild', gulp.series(
  'clean', 'build'
)

gulp.task 'watch', ->
  gulp.watch 'src/**/*.coffee', gulp.series(
    'build', 'spec'
  )

gulp.task 'default', gulp.series(
  'rebuild', 'spec', 'watch'
)
