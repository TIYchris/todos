var gulp = require('gulp');
var webpack = require('webpack-stream');
var jsonServer = require('json-server');

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public'));
});

// JSON API Server - run a REST server via a simple json file
gulp.task('serve:api', function(cb) {
  var apiServer = jsonServer.create();
  var router = jsonServer.router('db.json');

  apiServer.use(jsonServer.defaults());
  apiServer.use(router);
  apiServer.listen(process.env.PORT || 8000);

  cb();
});

// Watch for changes and reload stuff
gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['webpack']);
});

gulp.task('run', ['webpack', 'serve:api']);

gulp.task('default', ['webpack', 'serve:api', 'watch']);
