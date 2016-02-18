var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('html', ['js', 'sass', 'copy-bower-sources'], function () {
    return gulp.src('./src/index.html')
        .pipe(
            inject(gulp.src(bowerFiles(), {read: false}), {
                name: 'bower',
                ignorePath: '/www/',
                addRootSlash: false
            })
        )
        .pipe(
            inject(gulp.src(['./www/js/**/*.js'])
                .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                .pipe(angularFilesort())
                , {
                ignorePath: '/www/',
                addRootSlash: false
            })
        )
        .pipe(gulp.dest('./www'));
});

gulp.task('copy-bower-sources', function () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest('www/bower_components'));
});