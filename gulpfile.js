var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify'),
    browsersync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    jsonminify = require('gulp-jsonminify'),
    concat = require('gulp-concat');

var env,
    coffeeSoures,
    jsSources,
    sassSources,
    phpSources,
    fontSources,
    favSources,
    docSources,
    assets,
    outputDir,
    jsonSources,
    //add sassStyle to compass style to toggle between environments
    sassStyle,
    proxy;

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
jsonSources = [outputDir + '/js/*.json']
phpSources = [outputDir + '*.php'];
favSources = [outputDir + 'favicon/*.*'];
docSources = [outputDir + 'docs/*.*'];
fontSources = [outputDir + 'web_fonts/*.*'];
assets = [favSources, docSources, fontSources];



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

gulp.task('jsConcat', function () {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulpif(env === 'production',
            uglify()
        ))
        .pipe(gulp.dest(outputDir + 'js'))
});

gulp.task('compass', function () {
    gulp.src(sassSources)
        .pipe(compass({
                sass: 'components/sass',
                style: sassStyle
            })
            .on('error', gutil.log))
        .pipe(gulp.dest(outputDir + 'css'))
        .pipe(browsersync.stream())
});

gulp.task('jsonminify', function () {
            gulp.src('builds/development/js/*.json')
                .pipe(gulpif(env === 'production', jsonminify()))
                .pipe(gulpif(env === 'production', gulp.dest('builds/production/js')))
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
                    gulp.dest(outputDir)))
        });

        gulp.task('moveDocs', function () {
            gulp.src('builds/development/docs/*.*')
                .pipe(gulpif(env === 'production',
                    gulp.dest(outputDir + '/docs')))
        });

        gulp.task('moveFavicon', function () {
            gulp.src('builds/development/favicon/*.*')
                .pipe(gulpif(env === 'production',
                    gulp.dest(outputDir + '/favicon')))
        });

        gulp.task('moveWebFonts', function () {
            gulp.src('builds/development/web_fonts/*.*')
                .pipe(gulpif(env === 'production',
                    gulp.dest(outputDir + '/web_fonts')))
        });

        gulp.task('reload', function () {
            browsersync.reload(outputDir + '*.php')
        });


        gulp.task('watch', function () {
            gulp.watch('components/coffee/tagline.coffee', ['coffee']);
            gulp.watch('components/sass/*.scss', ['compass']);
            gulp.watch('components/scripts/*.js', ['jsConcat', 'reload']);
            gulp.watch('builds/development/js/*.json', ['jsonminify', 'reload']);
            gulp.watch('builds/development/*.php', ['phpMove']);
            gulp.watch('builds/development/favicon/*.*', ['moveFavicon']);
            gulp.watch('builds/development/docs/*.*', ['moveDocs']);
            gulp.watch('builds/development/web_fonts/*.*', ['moveWebFonts']);
            gulp.watch(assets, ['reload']);
        });

        gulp.task('default', ['coffee', 'jsConcat', 'compass', 'jsonminify', 'movePHP', 'moveDocs', 'moveFavicon', 'moveWebFonts', 'browsersync', 'watch']);