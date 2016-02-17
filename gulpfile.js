var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("www/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('src/js/*js')
        .pipe(gulp.dest('www/js'));
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('www'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('scss-watch', ['sass'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'sass', 'html'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./www"
        },
        port: 8899
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/js/*.js", ['js-watch']);
    gulp.watch("src/scss/*.scss", ['scss-watch']);
    gulp.watch("src/index.html").on('change', browserSync.reload);
});