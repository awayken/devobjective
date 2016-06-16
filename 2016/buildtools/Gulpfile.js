const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const minimist = require('minimist')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
const babel = require('gulp-babel')

const options = minimist(process.argv.slice(2), {
    default: {
        production: false
    }
});

gulp.task('css:build', () => {
    return gulp
        .src('app/**/*.css')
        .pipe( autoprefixer({
            browsers: [
                'last 2 versions',
                '> 5%',
                'ie 8'
            ]
        }) )
        .pipe( gulp.dest('dist') )
        .pipe( connect.reload() );
});

gulp.task('css:watch', ['css:build'], () => {
    gulp.watch('app/**/*.css', ['css:build']);
});

gulp.task('css:clean', () => {
    return del(['dist/**/*.css']);
});

gulp.task('js:build', () => {
    return gulp
        .src('app/**/*.js')
        .pipe( babel() )
        .pipe( options.production ? uglify() : gutil.noop() )
        .pipe( gulp.dest('dist') )
        .pipe( connect.reload() );
});

gulp.task('js:watch', ['js:build'], () => {
    gulp.watch('app/**/*.js', ['js:build']);
});

gulp.task('js:clean', () => {
    return del(['dist/**/*.js']);
});

gulp.task('html:build', () => {
    return gulp
        .src('app/**/*.html')
        .pipe( gulp.dest('dist') )
        .pipe( connect.reload() );
});

gulp.task('html:watch', ['html:build'], () => {
    gulp.watch('app/**/*.html', ['html:build']);
});

gulp.task('html:clean', () => {
    return del(['dist/**/*.html']);
});

gulp.task('build', ['css:build', 'js:build', 'html:build']);

gulp.task('watch', () => {
    return runSequence(
        'serve',
        ['css:watch', 'js:watch', 'html:watch']
    );
});

gulp.task('clean', ['css:clean', 'js:clean', 'html:clean']);

gulp.task('serve', ['build'], () => {
    return connect.server({
        livereload: true
    });
});

gulp.task('default', () => {
    console.log( 'Hello world');
});
