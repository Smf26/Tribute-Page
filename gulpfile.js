const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');


// Minify html files
function mHtml() {
  return gulp
  .src('*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
}
gulp.task(mHtml);

// CSS TO Clean CSS
function mCss() {
  return gulp
    .src('*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
}
gulp.task(mCss);

// Optimize images
function imageMin() {
  return gulp
    .src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}
gulp.task(imageMin);

// Build Deployment folder
gulp.task('build', gulp.series(mHtml, mCss, imageMin));