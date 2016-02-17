var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('html', ['inject-js'], function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('www'));
});

gulp.task('inject-js', ['js'], function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(['./www/**/*.js'], {read: false})))
        .pipe(gulp.dest('./www'));
});