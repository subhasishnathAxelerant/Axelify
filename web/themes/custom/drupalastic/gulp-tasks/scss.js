const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

const postCSSOptions = [autoprefixer()];
// const rtl = require("postcss-rtl");
// postCSSOptions.push(rtl())

module.exports = (gulp, config) => {
  gulp.task('scss', () =>
    gulp
      .src([...config.scss.source])
      .pipe(sassGlob())
      .pipe(sass(config.scss.options).on('error', sass.logError))
      .pipe(postcss(postCSSOptions))
      .pipe(gulp.dest(config.scss.destination)),
  );
};
