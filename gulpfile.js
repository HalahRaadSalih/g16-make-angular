var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');



gulp.task('default', ['minify']);

gulp.task('lint', function(){
  return gulp.src('./**/*.js')
              .pipe(eslint())
              .pipe(eslint.format())
              .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('./test/*.js', {read: false})
        .pipe(mocha())
});

gulp.task('minify', function () {
    return gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['default']);
    gulp.watch('./test/*.js', ['test']);
});
