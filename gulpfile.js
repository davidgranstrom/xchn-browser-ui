var gulp = require('gulp');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

var babelPresets = {
  // Use all of the ES2015 spec
  presets: [ 'es2015' ]
};

function compile(watch) {
  var transform = browserify('./src/main.js', { debug: true }).transform(babel.configure(babelPresets));
  var bundler = watchify(transform);

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

function serve() {
  return connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
}

gulp.task('production', function() { return compile(); });
gulp.task('develop', function() { return watch(); });
gulp.task('connect', function() { return serve(); });

gulp.task('default', [ 'develop', 'connect' ]);
