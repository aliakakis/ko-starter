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
    filepaths = require('node-filepaths'),
    stringify = require('stringify'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    mocha = require('gulp-mocha'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    flatten = require('gulp-flatten'),
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
    return browserify('src/js/index.js')
        .transform(babelify)
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: false
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(!optimizeAssets, sourcemaps.init({largeFile: true})))
        .pipe(gulpif(optimizeAssets, uglify()))
        .pipe(gulpif(optimizeAssets, stripdebug()))
        .pipe(gulpif(!optimizeAssets, sourcemaps.write()))
        .pipe(gulp.dest('build/dist/scripts/'));
});

/**
 * Testing
 */
gulp.task('test', function () {
    return gulp.src('src/js/dev/**/*.spec.js', { read: false })
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});

gulp.task('optimize:templates', ['clean', 'optimize:styles', 'optimize:scripts'], function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('copy:lib', ['clean'], function () {
    gulp.src('src/js/lib/**/*')
        .pipe(gulp.dest('build/dist/scripts/lib/'));

    gulp.src('semantic/dist/themes/**/*')
        .pipe(gulp.dest('build/dist/semantic/dist/themes/'));

    gulp.src('semantic/dist/*.min.*')
        .pipe(gulp.dest('build/dist/semantic/dist/'));

    return gulp.src(['bower_components/**/*'])
        .pipe(gulp.dest('build/dist/bower_components/'));
});

gulp.task('optimize:styles', ['clean'], function () {
    gulp.src('src/css/fonts/**/*')
        .pipe(gulp.dest('build/dist/css/fonts/'));

    gulp.src('src/css/images/**/*')
        .pipe(gulpif(optimizeAssets, imagemin()))
        .pipe(gulp.dest('build/dist/css/images/'));

    return gulp.src(['src/css/styles/**/*.css', 'src/css/styles/sass/**/*.scss'])
        .pipe(gulpif(!optimizeAssets, sourcemaps.init({largeFile: true})))
        .pipe(sass())
        .pipe(gulpif(optimizeAssets, cleancss()))
        .pipe(gulpif(!optimizeAssets, sourcemaps.write()))
        .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('run:dev', ['set-dev-node-env', 'clean', 'optimize:scripts', 'optimize:styles', 'optimize:templates', 'copy:lib']);

gulp.task('run:prod', ['set-prod-node-env', 'clean', 'optimize:scripts', 'optimize:styles', 'optimize:templates', 'copy:lib'], function () {
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
gulp.task('clean_styles', function () {
    del('build/dist/index.html');

    return del('build/dist/css/');
});

gulp.task('replace_styles', ['clean_styles'], function () {
    gulp.src('src/css/fonts/**/*')
        .pipe(gulp.dest('build/dist/css/fonts/'));

    gulp.src('src/css/images/**/*')
        .pipe(gulp.dest('build/dist/css/images/'));

    return gulp.src(['src/css/styles/**/*.css', 'src/css/styles/sass/**/*.scss'])
        .pipe(gulpif(!optimizeAssets, sourcemaps.init({largeFile: true})))
        .pipe(sass())
        .pipe(gulpif(optimizeAssets, cleancss()))
        .pipe(gulpif(!optimizeAssets, sourcemaps.write()))
        .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('watch:styles', function () {
    return gulp.watch(['src/css/styles/**/*.css', 'src/css/styles/sass/**/*.scss'], ['replace_styles']);
});

/**
 * Watchify
 */
var bundler = watchify(browserify(watchify.args));
var files = filepaths.getSync(['./src/js'], {
    ext:    ['.js', '.html'],
    ignore: ['lib']
});

bundler.add(files);
bundler.transform(babelify);
bundler.transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] },
    minify: false
});

gulp.task('run:watchify', ['watch:styles', 'run:dev'], bundle);
bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/dist/scripts/'));
}