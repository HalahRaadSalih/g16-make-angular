var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', function(){
  console.log('running default task');
  gulp
        .src('./src/**/*.js')
        .pipe(gulp.dest('./build'))
});


gulp.task('delayed', function (done) {
    setTimeout(function () {
        console.log('Delayed by 2 seconds');
        done();
    }, 2000);
});
