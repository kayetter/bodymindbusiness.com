var gulp = require('gulp'),
    gutil = require('gulp-util'),
    //coffee not used
    coffee = require('gulp-coffee'),
    //alternative preprocess to compass
    postcss = require('gulp-postcss'),
    //plugin for post css that minifies css
    cssnano = require('cssnano'),
    //plugin for postcss that adds vendor prefixes
    autoprefixer = require('autoprefixer'),
    //plugin for postcss that allows you to use new css features
    cssnext = require('cssnext'),
    //plugin for postcss that allows you to right css like sass
    precss = require('precss'),
    //compass concatenates scss files into css
    compass = require('gulp-compass'),
    //includes libraries in js scripts where called
    browserify = require('gulp-browserify'),
    //opens browser and syncs on changes
    browsersync = require('browser-sync').create(),
    //minifies js
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    //compress images dependent on pngcruhs
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    //resize image not a watch task
    imageResize = require('gulp-image-resize'),
    rename = require('gulp-rename'),
    //minifies json files
    jsonminify = require('gulp-jsonminify'),
    // deletes directories
    clean = require('gulp-clean'),
    //concatenates files
    concat = require('gulp-concat'),
    //grab bower js libraries and css libraries
    gulpcssnano = require('gulp-cssnano'),
    bowerFiles = require('main-bower-files');

//for cachebusting and file hasing
var rev = require('gulp-rev'),
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
    sassStyle,
    proxy,
    prod,
    isProd,
    isDev,
    limbo,
    cssAssets = [];


//sets a variable that if set = production environment otherwise it defaults to development, at cmd prompt use $ NODE_ENV=production gulp
env = process.env.NODE_ENV || 'development';

//boolean for is prod = true or isDev = true
isProd = env==='production';
isDev = env === 'development';

//variable changes in different environments
if (isDev) {
    outputDir = 'builds/development/';
    sassStyle = 'expanded';
    proxy = 'bmb.dev';
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
    proxy = 'bmb.prod';
}

// concatenate any cssthat is needed for bower component plugins
gulp.task('bower-css', function(){
  gulp.src(bowerFiles("**/*.css"))
   .pipe(concat('lib-styles.css'))
   .pipe(gulpcssnano())
      .pipe(gulp.dest('builds/development/css/'))
      .pipe(gulpif(isProd, gulpcssnano({
        sourcemap: true
      })))
      .pipe(gulpif(isProd, gulp.dest(limbo + 'css')))
});

// concatenate any js that is needed for bower component plugins
gulp.task('bower-js', ['bower-jquery'], function(){
  gulp.src(bowerFiles(["**/*.js","!**/dist/jquery.js"]))
    .pipe(concat('lib-scripts.js'))
    .pipe(gulp.dest('builds/development/js/'))
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulpif(isProd, gulp.dest(limbo + 'js')))
});

gulp.task('bower-jquery', function(){
  gulp.src(bowerFiles("**/dist/jquery.js"))
    .pipe(gulp.dest('builds/development/js/'))
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulpif(isProd, gulp.dest(limbo + 'js')))
});

//variables fr source files if needed

jsSources = [

    'components/scripts/functions.js',
    'components/scripts/calls.js'
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




//concatenates js sources into one script file and adds libraries if called minifies if isProd amd moves to limbo folder
gulp.task('jsConcat', function () {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
        .pipe(gulpif(isProd, uglify()))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'js')))
});

//runs compass to concatenate scss files and create css. if isProd will minifies buy using the sassStyle variable and moves to limbo
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

gulp.task('css', function(){
  gulp.src('css/style.css')
  .pipe(postcss([
    // cssnano(),
    autoprefixer(),
    precss()
  ]))
  .on('error', gutil.log)
  .pipe(gulp.dest('css/processed/'));
});

//if isProd will minify json files and move to limbo
gulp.task('jsonminify', function () {
    gulp.src('builds/development/js/*.json')
        .pipe(gulpif(isProd, jsonminify()))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'js')));
});

// make versions of images using gulp-image-resize not in watch list.
var resizeImageTasks = [];

[400,600,800,1000,2000].forEach(function(size) {
  var resizeImageTask = 'resize_' + size;
  gulp.task(resizeImageTask, function() {
    return gulp.src('builds/development/image_tobe_processed/**/*.{jpg,jpeg,png}')
      .pipe(imageResize({
         width:  size,
         upscale: false,
         crop: false
             }))
      .pipe(rename(function (path) { path.basename += '_'+size; }))
      .pipe(gulp.dest('builds/development/images/'))
  });
  resizeImageTasks.push(resizeImageTask);
});
gulp.task('resize-images', resizeImageTasks);

//if isProd compresses image files and rmoves viewbox for svg and puts in limbo if i
gulp.task('images', function () {
    gulp.src('builds/development/images/**/*.*')
        .pipe(gulpif(isProd, imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        })))
        .pipe(gulpif(isProd, gulp.dest(limbo + 'images')));

});

//opens browser that is synced with changes
gulp.task('browsersync', function () {
    browsersync.init({
        open: 'external',
        host: proxy,
        proxy: proxy,
        port: 80
    });
});

//reloads browser with browser sync
gulp.task('reload', function () {
    browsersync.reload(outputDir + '*.php')
});

//if isProd moves php files to limbo
gulp.task('movePHP', function () {
    gulp.src('builds/development/*.php')
        .pipe(gulpif(isProd,
            gulp.dest(limbo)))
});

//if isProd moves .pdf files to limbo
gulp.task('moveDocs', function () {
    gulp.src('builds/development/docs/*.*')
        .pipe(gulpif(isProd,
            gulp.dest(limbo + 'docs')))
});


//if isProd moves web fonts files to limbo
gulp.task('moveWebFonts', function () {
    gulp.src('builds/development/web_fonts/*.*')
        .pipe(gulpif(isProd,
            gulp.dest(outputDir + 'web_fonts')));
});


//==============MAKE PRODUCTION BUILD
// three tasks for file hashing and cachebusting
//***********************************************************

//deletes production and interim files for prod build -- do this first
gulp.task('cleanProd', function(){
    gulp.src(prod, {read: false})
        .pipe(clean());
    gulp.src(limbo, {read:false})
        .pipe(clean());
});

//runs all dependencies to create limbo files structure use node_env=production at prompt do this second
gulp.task('kickit', ['jsConcat', 'bower-js', 'bower-css', 'compass', 'movePHP', 'moveWebFonts', 'jsonminify', 'images', 'moveDocs']);

//creates signature on all files indicated and moves them to prod folder and creates manifest -- rev-manifest.json. do this third
gulp.task('rev', function () {
    gulp.src(limbo + '**/*.{js,css,json,png,ico,jpg,JPG,jpeg,pdf}')
        .pipe(rev())
        .pipe(gulp.dest(prod))
        .pipe(rev.manifest())
        .pipe(gulp.dest(prod))
        .pipe(revDel({dest: prod}))
        .pipe(gulp.dest(prod))
});

//replaces all references to the modified file names in PHP files that are sitting in limbo, then moves them to prod run revcss fourth as revreplace is a dependency
gulp.task('revreplace', function () {
    var manifest = gulp.src(prod + 'rev-manifest.json');
    return gulp.src(limbo + '**/*.php')
        .pipe(revReplace({manifest: manifest,
                          replaceInExtensions: ['.js', '.css', '.php']
                         }))
        .pipe(gulp.dest(prod));
});

//replacess all references in .css and .js files that are in prod and saves them to prod
gulp.task('revcss', ['revreplace'], function(){

    var manifest = gulp.src('builds/production/rev-manifest.json');
    return gulp.src('builds/production/**/*.{css,js}')
        .pipe(revReplace({manifest: manifest,
                          replaceInExtensions: ['.js', '.css', '.php']
                         }))
        .pipe(gulp.dest(prod));
});




gulp.task('watch', function () {
    gulp.watch('components/scripts/*.js', ['jsConcat']);
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('builds/development/**/*.*', ['reload']);
    gulp.watch('bower.json', ['bower-css', 'bower-js']);
});



gulp.task('default', ['bower-css', 'bower-js', 'jsConcat', 'compass', 'watch', 'browsersync']);
