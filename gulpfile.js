var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('build', function(){
  // include main.js first, exclude js/lib
  gulp.src(['js/**/main.js', 'js/**/*.js', '!js/lib/*'])
    .pipe(concat('bundle.js'))    
    .pipe(babel())
    .pipe(gulp.dest('build/'));
});