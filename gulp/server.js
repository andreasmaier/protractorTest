var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('js-watch', ['js'], function () {
    browserSync.reload();
});
gulp.task('html-watch', ['html'], function () {
    browserSync.reload();
});
gulp.task('sass-watch', ['sass'], function () {
    browserSync.reload();
});

gulp.task('serve', ['html'], function () {
    browserSync.init({
        server: {
            baseDir: "./www"
        },
        port: 8899
    });

    gulp.watch("src/js/**/*.js", ['js-watch']);
    gulp.watch("src/scss/*.scss", ['sass-watch']);
    gulp.watch("src/index.html", ['html-watch']);
});