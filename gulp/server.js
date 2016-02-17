var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('js-watch', ['html'], browserSync.reload);
gulp.task('scss-watch', ['sass'], browserSync.reload);

gulp.task('serve', ['js', 'sass', 'html'], function () {
    browserSync.init({
        server: {
            baseDir: "./www"
        },
        port: 8899
    });

    gulp.watch("src/js/*.js", ['js-watch']);
    gulp.watch("src/scss/*.scss", ['scss-watch']);
    gulp.watch("src/index.html").on('change', browserSync.reload);
});