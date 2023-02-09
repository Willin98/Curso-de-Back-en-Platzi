const gulp = require('gulp');
const serve = require('gulp-server-livereload');

gulp.task('build', () => {
  console.log('Construyendo el sitio');
  setTimeout(cb, 1200);
});

gulp.task('serve', () => {
  gulp.src('www')
    .pipe(serve({
      livereload: true,
      open: true,
    }));
});

gulp.task('default', gulp.series('build', 'serve'));