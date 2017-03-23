'use strict';

require("babel-core/register");

var browserify = require('browserify'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    babel = require("gulp-babel"),
    babelify = require("babelify"),
    stringify = require('stringify'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    mocha = require('gulp-mocha'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    debug = require('gulp-debug'),
    argv = require('yargs').argv,
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    revnapkin = require('gulp-rev-napkin'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    stripdebug = require('gulp-strip-debug'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    glob = require('glob'),
    es = require('event-stream');

var optimizeAssets = argv.production;

// NODE_ENV
gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

// gulp run:prod --production
gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

// Clean
gulp.task('clean', function () {
    return del('build/dist/');
});

/**
 * Browserify Development
 */
gulp.task('optimize:scripts', ['clean'], function() {
    return browserify('./js/index.js')
        .transform(babelify)
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: false
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/dist/scripts/'));
});

/**
 * Testing
 */
gulp.task('test', function () {
    return gulp.src('js/dev/**/*.spec.js', { read: false })
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});

gulp.task('optimize:templates', ['optimize:styles', 'optimize:scripts'], function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('copy:lib', ['clean'], function () {
    gulp.src('js/lib/**/*')
        .pipe(gulp.dest('build/dist/scripts/lib/'));

    gulp.src('node_modules/ko-component-router/dist/ko-component-router.min.js')
        .pipe(gulp.dest('build/dist/scripts/lib/ko-component-router/'));

    return gulp.src(['bower_components/**/*'])
        .pipe(gulp.dest('build/dist/bower_components/'));
});

gulp.task('copy:fonts', ['clean'], function () {
    return gulp.src('css/fonts/**/*')
        .pipe(gulp.dest('build/dist/css/fonts/'));
});

gulp.task('optimize:images', ['clean'], function () {
    return gulp.src('css/images/**/*')
        .pipe(gulpif(optimizeAssets, imagemin()))
        .pipe(gulp.dest('build/dist/css/images/'));
});

gulp.task('optimize:styles', ['clean'], function () {
    return gulp.src(['css/styles/**/*.css', 'css/styles/sass/**/*.scss'])
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass())
        .pipe(gulpif(optimizeAssets, cleancss()))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('run:dev', ['set-dev-node-env', 'clean', 'optimize:scripts', 'optimize:images', 'optimize:styles', 'optimize:templates', 'copy:lib', 'copy:fonts']);

gulp.task('run:prod', ['set-prod-node-env', 'clean', 'optimize:scripts', 'optimize:images', 'optimize:styles', 'optimize:templates', 'copy:lib', 'copy:fonts'], function () {
    const notTemplateFilter = filter(['**/*', '!**/*.html'], {restore: true});

    return gulp.src(['build/dist/**/*'])
     .pipe(notTemplateFilter)
     .pipe(rev())
     .pipe(notTemplateFilter.restore)
     .pipe(revReplace({replaceInExtensions: ['.html', '.css']}))
     .pipe(gulp.dest('build/dist/'))
     .pipe(revnapkin({verbose: false}));
});

/**
 * Watch for changes
 */
gulp.task('watch:clean_styles', function () {
    return del('build/dist/css/');
});

gulp.task('watch:replace_styles', ['watch:clean_styles'], function () {
    return gulp.src(['css/styles/**/*.css', 'css/styles/sass/**/*.scss'])
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('watch:styles', function () {
    return gulp.watch(['css/styles/**/*.css', 'css/styles/sass/**/*.scss'], ['watch:replace_styles']);
});

/**
 * Watchify
 */
var bundler = watchify(browserify(watchify.args));
// add the file to bundle
bundler.add([
    './js/index.js',
    './js/app/AppRoutes.js',
    './js/common/components/AppHeader.js',
    './js/routes-components/home/Home.js',
    './js/routes-components/login/Login.js',
    './js/routes-components/signup/SignUp.js',
    './js/stores/AppStore.js',
    './js/stores/LoginStore.js',
    './js/stores/SignUpStore.js'
]);
// add any other browserify options or transforms here
bundler.transform(babelify);

gulp.task('run:watchify', bundle); // so you can run `gulp watchify` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/dist/scripts/'));
}