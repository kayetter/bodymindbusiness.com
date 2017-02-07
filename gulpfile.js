var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify'),
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
});

gulp.task('default', ['coffee', 'jsConcat', 'compass']);
          