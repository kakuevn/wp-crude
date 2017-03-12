'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var cssnano     = require('gulp-cssnano');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');



// Static Server + watching scss/js/php files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://localhost:8000/ics-bareboner/" //Change the address here
    });

    gulp.watch("assets/raw/scss/*.scss", ['sass']); //Change path to scss folder that needs to be watched if needed
    gulp.watch("**/*.php").on('change', browserSync.reload); //Change location of your template files if needed
    gulp.watch("assets/raw/js/**/*.js").on('change', browserSync.reload); //Change location of your template files if needed
});

//Minify CSS
gulp.task('cssnano', function() {
    return gulp.src('assets/raw/css/*.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
});

//Minify JS
gulp.task('minifyjs', function () {
  gulp.src('assets/raw/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets/js'))
});

//Move fonts folder
gulp.task('fonts', function() {
  gulp.src("assets/raw/fonts/**.*")
      .pipe(gulp.dest('assets/fonts'));
});

//Optimize images
gulp.task('imagemin', function() {
    gulp.src('assets/raw/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("assets/raw/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("assets/raw/css"))
        .pipe(browserSync.stream());
});

// Final build
gulp.task('build', ['imagemin', 'fonts', 'minifyjs', 'cssnano']);

gulp.task('default', ['serve']);
