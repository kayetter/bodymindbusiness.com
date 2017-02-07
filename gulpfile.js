var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify'),
    browsersync = require('browser-sync').create(),
    concat = require('gulp-concat');




var jsSources = [
    'components/scripts/functions.js',
    'components/scripts/calls.js',
    'components/scripts/tagline.js'
];

var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', function() {
    
    //grabs information in source file
    gulp.src('components/coffee/tagline.coffee')
             //runs it through the variable, bare = true removes safety wrapper
             .pipe(coffee({bare:true})
    //make sure a coffee script error doesn derail ll of gulp process
            .on('error', gutil.log))
    //pipe results from coffe script and put the file in a new destination
            .pipe(gulp.dest('components/scripts'))
    
});

gulp.task('jsConcat', function(){
    gulp.src(jsSources)
    .pipe(concat('scripts.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});



gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
        sass: 'components/sass',
        style: 'expanded'
    })
              .on('error', gutil.log))
        .pipe(gulp.dest('builds/development/css'))
        .pipe(browsersync.stream())
});

gulp.task('browsersync', function(){
    browsersync.init({
        open: 'external',
        host: 'bmb.dev',
        proxy: 'bmb.dev',
        port: 80
    });
    
});

gulp.task('reload', function() {
    browsersync.reload('builds/development/*.php')
    
});

gulp.task('watch', function(){
    gulp.watch('components/coffee/tagline.coffee', ['coffee']);  
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('components/scripts/*.js', ['jsConcat', 'reload']);
});

gulp.task('default', ['coffee', 'browsersync', 'jsConcat', 'compass', 'watch']);
          