const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));;
//const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const touch = require('gulp-touch-cmd');

gulp.task('styles', function () {
  const plugins = [
    tailwindcss(),
    autoprefixer(),
    cssnano(),
  ];

  return gulp
    .src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    //.pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(concat('./css/styles.css'))
    .pipe(gulp.dest('./assets'))
    .pipe(touch()); 
});
/*
gulp.task('scripts', function () {
  return gulp
  .src(['./{layout,snippets,templates,assets,sections}/*.js', '!./{layout,snippets,templates,assets,sections}/*.min.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});
*/
gulp.task('watch', function () {
  gulp.watch(['./sass/*.scss'], gulp.series('styles'));
  //gulp.watch(['./{layout,snippets,templates,assets,sections}/*.js', '!./{layout,snippets,templates,assets,sections}/*.min.js'], gulp.series('scripts'));
});

gulp.task('default', gulp.series('watch'));