var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("www/css"))
        .pipe(browserSync.stream());
});