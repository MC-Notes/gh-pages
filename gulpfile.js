var gulp        = require('gulp');
var bs          = require('browser-sync').create();
var reload      = bs.reload
var stream      = bs.stream
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    bs.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// /**
//  * Rebuild Jekyll & do page reload
//  */
// gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
//     reload();
// });

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    bs.init({
        notify: true,
        open: false, //"ui",
        server: {
            baseDir: '_site',
            //directory: true
        },
        // injectChanges: false, // Try to just reload the browser
        browser: ["google chrome", "safari"]
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: bs.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
            { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(stream());
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    
    gulp.watch([
        '_sass/*.scss', 
        '_sass/*.sass', 
        '_sass/base/*.scss', 
        '_sass/base/*.sass'], 
        ['sass']);
    gulp.watch([
        '*.html', 
        '_layouts/*.html', 
        '_includes/*.html', 
        '*.md'], 
        ['jekyll-build', reload]);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('deploy', function (done) {
  return cp.spawn( 'git', ['subtree', 'push', '--prefix', '_site/' ,'origin', 'master'], {stdio: 'inherit'}).on('close', done);
});