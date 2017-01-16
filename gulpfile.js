// d3 in action gulpfile

// Include gulp
// nvm use --delete-prefix v5.4.0 --silent

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sassOptions = { errLogToConsole: true, outputStyle: 'expanded' };
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
const babel = require('gulp-babel');







gulp.task('default', function() {
  // place code for your default task here
  console.log('Hello gulp');
});


gulp.task('scripts', function() {
	
    return gulp.src(['app/scripts/*.js', 'app/scripts/vendors/*.js'])
    	.pipe(babel({
			presets: ['es2015']
		}))
        //.pipe(concat('all.js'))
        //.pipe(gulp.dest('app/dist/js'))
        //.pipe(rename('all.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('app/dist/js'));
        
});





// Lint Task
gulp.task('lint', function() {
    return gulp.src(['app/scripts/*.js','!node_modules/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        //s.pipe(jshint.reporter('fail'));
});

gulp.task('sass', function() {
    return gulp
    	.src('app/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
                browsers: [
                    'Android >= 2.3',
                    'BlackBerry >= 7',
                    'Chrome >= 9',
                    'Firefox >= 4',
                    'Explorer >= 9',
                    'iOS >= 5',
                    'Opera >= 11',
                    'Safari >= 5',
                    'ChromeAndroid >= 9',
                    'FirefoxAndroid >= 4',
                    'ExplorerMobile >= 9'
                ]
            }))
        .pipe(gulp.dest('app/dist/css'))
        .pipe(browserSync.reload({
	      stream: true
	    }));
});

gulp.task('sassdoc', function () {
  return gulp
    .src('app/scss/*.scss')
    .pipe(sassdoc())
    .resume();
});



gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src('app/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/dist/css'));
});

// Watch Files For Changes
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scripts/*.js', ['lint', 'scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

// browserSync
//Live-reloading with Browser Sync


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
  });
  gulp.watch("app/**/*.html").on('change', browserSync.reload);

});


gulp.task('default', ['scripts', 'lint', 'sass', 'watch'], function(){});
