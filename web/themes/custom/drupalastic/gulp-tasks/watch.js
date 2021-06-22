module.exports = (gulp, config) => {
  gulp.task('watch', () => {
    gulp.watch([...config.scss.all], gulp.series('lint:scss', 'scss', 'inject:css'))
    gulp.watch([...config.ts.source], gulp.series('lint:ts', 'ts', 'inject:js'));
  });
};
