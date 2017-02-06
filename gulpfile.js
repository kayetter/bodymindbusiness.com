var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var jsSources = [
    'components/scripts/functions.js',
    'components/scripts/calls.js'
]

gulp.task('coffee', function() {
    
    //grabs information in source file
    gulp.src('components/coffee/tagline.coffee')
             //runs it through the variable, bare = true removes safety wrapper
             .pipe(coffee({bare:true})
    //make sure a coffee script error doesn derail ll of gulp process
            .on('error', gutil.log('there was a coffee error'))
    //pipe results from coffe script and put the file in a new destination
            .pipe(gulp.dest('components/scripts'))
    )
    
});

gulp.task('jsConcat', function(){
    gulp.src(jsSources)
    .pipe(concat('scripts.js'))
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('default', ['log']);
          