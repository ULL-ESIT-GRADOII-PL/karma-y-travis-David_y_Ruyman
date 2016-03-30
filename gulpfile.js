var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');
var ghPages = require('gulp-gh-pages');

/*
  Genera la versión minificada de todos los ficheros
  html, js y css que contiene el proyecto. Los ficheros
  resultantes son almacenados en el directorio 'minified'
  
  dependencia: gulp-minifier
  instalar dependencia: npm install --save-dev gulp-minifier
*/
var dirJs = 'minified/assets/js';
var dirCss = 'minified/assets/css';
var dirVendor = 'minified/vendor';
var dirRoot = 'minified';
var dirTest = 'minified/test';
var dirImages = 'minified/assets/images';

gulp.task('minify', function() {
  
  gulp.src(['*.html', '*.js', '*.css'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(dirRoot));
  
  gulp.src(['assets/js/*.js'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(dirJs));
  
  gulp.src(['assets/css/*.css'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(dirCss));
  
  gulp.src(['vendor/*.js'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(dirVendor));
  
  gulp.src(['test/*.html', 'test/*.js'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(dirTest));
  
  gulp.src('assets/images/*').pipe(gulp.dest(dirImages));
  gulp.src('.travis.yml').pipe(gulp.dest(dirRoot));
  gulp.src('package.json').pipe(gulp.dest(dirRoot));
  gulp.src('.gitignore').pipe(gulp.dest(dirRoot));
});

/*
  Elimina todos los elementos dentro del directorio 'minified'
  
  dependencia: del
  instalar dependencia: npm install --save-dev gulp del
*/
gulp.task('clean', function(cb) {
  del([
    // Eliminar todos los ficheros dentro de la carpeta minified
    'minified/**/*',
  ], cb);
});

gulp.task('deploy', function() {
  return gulp.src('./minified/**/*')
  .pipe(ghPages());
});