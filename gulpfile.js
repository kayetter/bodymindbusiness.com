var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify'),
    browsersync = require('browser-sync').create(),
    concat = require('gulp-concat');

var env,
    coffeeSoures,
    jsSources,
    sassSources,
    phpSources,
    outputDir,
    //add sassStyle to compass style to toggle between environments
    sassStyle;

//sets a variable that if set = production environment otherwise it defaults to development, at cmd prompt use $ NODE_ENV=production gulp
 env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    outputDir = 'builds/development/';
    sassStyle = 'expanded';
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
}

jsSources = [
    'components/scripts/functions.js',
    'components/scripts/calls.js',
    'components/scripts/tagline.js'
];
sassSources = ['components/sass/style.scss'];
phpSources = [outputDir + '*.php'];



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
        .pipe(gulp.dest(outputDir +'js'))
});



gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
        sass: 'components/sass',
        style: sassStyle
    })
              .on('error', gutil.log))
        .pipe(gulp.dest(outputDir +'css'))
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
    browsersync.reload(outputDir + '*.php')
    
});


gulp.task('watch', function(){
    gulp.watch('components/coffee/tagline.coffee', ['coffee']);  
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('components/scripts/*.js', ['jsConcat', 'reload']);
    gulp.watch(phpSources, ['reload']);
    gulp.watch(outputDir +'js/*.json', ['reload'])
});

gulp.task('default', ['coffee', 'browsersync', 'jsConcat', 'compass', 'watch']);
          