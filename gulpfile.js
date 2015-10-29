var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', ['js','less']);
gulp.task('build', ['js','less']);


gulp.task('js', function(){
  // include main.js first, exclude js/lib
  gulp.src(['js/**/main.js', 'js/**/*.js', '!js/lib/*'])
  .pipe(concat('bundle.js'))    
  .pipe(babel())
  .pipe(gulp.dest('build'));

});

gulp.task('less', function(){
  gulp.src(['./less/main.less'])
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes')]
  }))
  .pipe(autoprefixer({
    browsers: ['> 1%']
  }))
  .pipe(gulp.dest('css'));
});