var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concatCss   = require('gulp-concat-css');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');



// SCSS ========>>>>>>> CSS
gulp.task('sass', function(){ 
    return gulp.src('app/css/sass/*.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('app/css'))
});


// CSS CONCATENATION
gulp.task('concat-css', ['sass'], function () { // runs SASS before CONCAT-CSS
  return gulp.src([
    'app/css/reset.css',
    'app/css/1920.css',
    'app/css/768.css',
    'app/css/320.css',
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





gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['cssmin', 'browser-sync'], function() {
    gulp.watch('app/css/sass/*.scss', ['cssmin']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
