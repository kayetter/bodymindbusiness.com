var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify'),
    browsersync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    jsonminify = require('gulp-jsonminify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
//for chacebusting and file hasing

    rev = require('gulp-rev').
    revDel = require('rev-del'),
    revReplace = require('gulp-rev-replace');

var env,
    coffeeSoures,
    jsSources,
    sassSources,
    phpSources,
    fontSources,
    favSources,
    docSources,
    imgSources,
    assets,
    outputDir,
    jsonSources,
    //add sassStyle to compass style to toggle between environments
    sassStyle,
    proxy,
    limbo;

//sets a variable that if set = production environment otherwise it defaults to development, at cmd prompt use $ NODE_ENV=production gulp
env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    outputDir = 'builds/development/';
    sassStyle = 'expanded';
    proxy = 'bmb.dev';
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
    proxy = 'bmb.prod';
}

jsSources = [
    'components/scripts/functions.js',
    'components/scripts/calls.js',
    'components/scripts/tagline.js'
];

sassSources = ['components/sass/style.scss'];
jsonSources = [outputDir + '/js/*.json'];
phpSources = [outputDir + '*.php'];
favSources = [outputDir + 'favicon/*.*'];
docSources = [outputDir + 'docs/*.*'];
fontSources = [outputDir + 'web_fonts/*.*'];
imgSources = [outputDir + 'images/**/*.*'];
assets = [favSources, docSources, fontSources, imgSources];
limbo = "limbo/";


gulp.task('coffee', function () {

    //grabs information in source file
    gulp.src('components/coffee/tagline.coffee')
        //runs it through the variable, bare = true removes safety wrapper
        .pipe(coffee({
                bare: true
            })
            //make sure a coffee script error doesn derail ll of gulp process
            .on('error', gutil.log))
        //pipe results from coffe script and put the file in a new destination
        .pipe(gulp.dest('components/scripts'))

});

gulp.task('cleanProd', function(){
    gulpif(env==='production',
          gulp.src('builds/production/', {read: false})
          .pipe(clean()))
});

gulp.task('jsConcat', function () {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulpif(env === 'production',
            uglify()
        ))
        .pipe(gulpif(env==='production', gulp.dest(limbo))
        .pipe(gulp.dest('builds/development/js')
});

gulp.task('compass', function () {
    gulp.src(sassSources)
        .pipe(compass({
                sass: 'components/sass',
                style: sassStyle
            })
            .on('error', gutil.log))
        .pipe(gulpif(env==='production', gulp.dest(limbo))
        .pipe(gulp.dest('builds/development/css')

        .pipe(browsersync.stream())
});

gulp.task('jsonminify', function () {
    gulp.src('builds/development/js/*.json')
        .pipe(gulpif(env === 'production', jsonminify()))
        .pipe(gulpif(env === 'production', gulp.dest(limbo)))
        .pipe(gulp.dest('builds/development/js')
});

gulp.task('images', function () {
    gulp.src('builds/development/images/**/*.*')
        .pipe(gulpif(env === 'production', imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        })))
        .pipe(gulpif(env === 'production', gulp.dest(limbo)))
});

gulp.task('browsersync', function () {
    browsersync.init({
        open: 'external',
        host: proxy,
        proxy: proxy,
        port: 80
    });
});

gulp.task('movePHP', function () {
    gulp.src('builds/development/*.php')
        .pipe(gulpif(env === 'production',
            gulp.dest(limbo)))
});

gulp.task('moveDocs', function () {
    gulp.src('builds/development/docs/*.*')
        .pipe(gulpif(env === 'production',
            gulp.dest(limbo)))
});

gulp.task('moveFavicon', function () {
    gulp.src('builds/development/favicon/*.*')
        .pipe(gulpif(env === 'production',
            gulp.dest(limbo)))
});

gulp.task('moveWebFonts', function () {
    gulp.src('builds/development/web_fonts/*.*')
        .pipe(gulpif(env === 'production',
            gulp.dest(limbo)))
});

gulp.task('reload', function () {
    browsersync.reload(outputDir + '*.php')
});


gulp.task('watch', function () {
    gulp.watch('components/coffee/tagline.coffee', ['coffee']);
    gulp.watch('components/sass/*.scss', ['compass', 'reload']);
    gulp.watch('components/scripts/*.js', ['jsConcat', 'reload']);
    gulp.watch('builds/development/js/*.json', ['jsonminify', 'reload']);
    gulp.watch('builds/development/*.php', ['movePHP']);
    gulp.watch('builds/development/images/**/*.*', ['images']);
    gulp.watch('builds/development/favicon/*.*', ['moveFavicon']);
    gulp.watch('builds/development/docs/*.*', ['moveDocs']);
    gulp.watch('builds/development/web_fonts/*.*', ['moveWebFonts']);
    gulp.watch(assets, ['reload']);
});

gulp.task('default', ['coffee', 'jsConcat', 'compass', 'jsonminify', 'images', 'movePHP', 'moveDocs', 'moveFavicon', 'moveWebFonts', 'browsersync', 'watch']);