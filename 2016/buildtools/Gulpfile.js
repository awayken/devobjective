const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

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
        .pipe( gulp.dest('dist') );
});

gulp.task('css:watch', ['css:build'], () => {
    gulp.watch('app/**/*.css', ['css:build']);
});

gulp.task('js:build', () => {
    return gulp
        .src('app/**/*.js')
        .pipe( gulp.dest('dist') );
});

gulp.task('js:watch', ['js:build'], () => {
    gulp.watch('app/**/*.js', ['js:build']);
});

gulp.task('html:build', () => {
    return gulp
        .src('app/**/*.html')
        .pipe( gulp.dest('dist') );
});

gulp.task('html:watch', ['html:build'], () => {
    gulp.watch('app/**/*.html', ['html:build']);
});

gulp.task('default', () => {
    console.log( 'Hello world');
});
