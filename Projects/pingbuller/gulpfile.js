var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concatCss   = require('gulp-concat-css');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var lec         = require ('gulp-line-ending-corrector');
var jsmin       = require('gulp-jsmin');



// SCSS ========>>>>>>> CSS
gulp.task('sass', function(){ 
    return gulp.src('app/css/sass/*.scss') 
        .pipe(sass())
        .pipe(lec({verbose:true, eolc: 'CRLF'}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
});


// CSS CONCATENATION
gulp.task('concat-css', ['sass'], function () { // runs SASS before CONCAT-CSS
  return gulp.src([
    'app/css/reset.css',
    'app/css/320.css',
    'app/css/480.css',
    'app/css/768.css',
    'app/css/960.css',
    ])
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('app/css/'));
});


// MAIN CSS MINIFICATION
gulp.task('cssmin', ['concat-css'], function () {
    gulp.src('app/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('jsmin', function () {
    gulp.src('app/js/script.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js/'));
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', [ 'jsmin', 'cssmin', 'browser-sync'], function() {
    gulp.watch('app/css/sass/*.scss', ['cssmin']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
