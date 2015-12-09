
/**
 * Compile JSX/ES6 to .js
 */

var path = require('path') 
  gulp = require('gulp'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

gulp.task('scripts', function () {
  return browserify({
    entries: './src/react-http.js',
    extensions: ['.js'],
    debug: true,
    extensions: ['.js']
  })
  .transform(babelify.configure({
    sourceMapRelative: path.resolve(__dirname, 'src'),
    presets: ['es2015', 'react']
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', [
  'scripts'
]);
