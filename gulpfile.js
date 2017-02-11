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
    concat = require('gulp-concat');
//for chacebusting and file hasing

var rev = require('gulp-rev'),
    revDel = require('rev-del'),
    cachebust = require('gulp-cachebust'),
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
    prod,
    isProd,
    isDev,
    dList,
    limbo;


//sets a variable that if set = production environment otherwise it defaults to development, at cmd prompt use $ NODE_ENV=production gulp
env = process.env.NODE_ENV || 'development';
//boolean for is prod = true
isProd = env==='production';
isDev = env === 'development';

if (env === 'development') {
    outputDir = 'builds/development/';
    sassStyle = 'expanded';
    proxy = 'bmb.dev';
    //default list of tasks to run when in development
    dList = ['jsConcat', 'compass', 'watch', 'browsersync'];
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
    proxy = 'bmb.prod';
    //default list of tasks to run when in production
    dList = ['revreplace', 'browsersync'];
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
prod = 'builds/production/';



gulp.task('cleanProd', function(){
      gulp.src('builds/production/', {read: false})
       .pipe(clean());
        gulp.src(limbo, {read:false})
        .pipe(clean());
});

gulp.task('jsConcat', function () {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
        .pipe(gulpif(isProd, uglify))
        .pipe(gulp.dest(limbo + 'js'))
});

gulp.task('compass', function () {
    gulp.src(sassSources)
        .pipe(compass({
                sass: 'components/sass',
                style: 'expanded'
            })
            .on('error', gutil.log))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'css')))
        .pipe(gulpif(isDev, gulp.dest('builds/development/css')))
        .pipe(browsersync.stream());
});


gulp.task('jsonminify', function () {
    gulp.src('builds/development/js/*.json')
        .pipe(gulpif(isProd, jsonminify()))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'js')));
});

gulp.task('images', function () {
    gulp.src('builds/development/images/**/*.*')
        .pipe(gulpif(isProd, imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        })))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'js')));

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
        .pipe(gulpif(isProd,
            gulp.dest(limbo)))
});

gulp.task('moveDocs', function () {
    gulp.src('builds/development/docs/*.*')
        .pipe(gulpif(isProd,
            gulp.dest(limbo + 'docs')))
});

gulp.task('moveFavicon', function () {
    gulp.src('builds/development/favicon/*.*')
        .pipe(gulpif(isProd,
            gulp.dest(limbo + 'favicon')))
});

gulp.task('moveWebFonts', function () {
    gulp.src('builds/development/web_fonts/*.*')
        .pipe(gulpif(isProd,
            gulp.dest(outputDir + 'web_fonts')));
});
        
//rename assets based on content cache



gulp.task('rev', ['jsConcat', 'compass', 'movePHP', 'moveWebfonts', 'jsonminify', 'images', 'moveFavicon', 'moveDocs'], function () {
    gulp.src(limbo + '**/*.{js,css,jpeg,JPG,png,jpg,svg,ico,pdf,json}')
        .pipe(rev())
        .pipe(gulp.dest('builds/production/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('builds/production/'))
        .pipe(revDel({dest: 'builds/production/'}))
        .pipe(gulp.dest('builds/production/'))
});

gulp.task('revreplace', ['rev', 'browsersync'], function () {
    var manifest = gulp.src('builds/production/rev-manifest.json');
    
    return gulp.src(limbo + '*.php')
    // Awesome html stuff 
        .pipe(gulpif(isProd,(revReplace({manifest: manifest,
                          replaceInExtensions: ['.js', '.css', '.php']
                         }))))
        .pipe(gulp.dest('builds/production/'));
});

gulp.task('reload', function () {
    browsersync.reload(outputDir + '*.php')
});


gulp.task('watch', function () {
    gulp.watch('components/scripts/*.js', ['jsConcat']);
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('builds/development/**/*.*', ['reload']);
});



gulp.task('default', dList);