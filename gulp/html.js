var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('html', ['js', 'sass', 'copy-bower-sources', 'copy-templates'], function () {
    return gulp.src('./src/index.html')
        .pipe(
            inject(gulp.src(bowerFiles(), {read: false}), {
                name: 'bower',
                ignorePath: '/www/',
                addRootSlash: false,
                transform: function (filepath, file, i, length) {
                    return '<script src="/bower_components/' + filepath.split("/").pop() + '"></script>';
                }
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

gulp.task('copy-templates', function () {
    return gulp.src(['./src/js/**/*.html'])
        .pipe(gulp.dest('./www/js'));
});

gulp.task('copy-bower-sources', function () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest('www/bower_components'));
});