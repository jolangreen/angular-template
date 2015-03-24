var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');


//Images
gulp.task('images', function() {
    return gulp.src('images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


//Scripts
gulp.task('scripts', function() {
    return gulp.src(['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'js/*.js'])
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});


// Compile Sass using compass
gulp.task('styles', function() {
   return gulp.src('sass/*.scss')
     .pipe(compass({ config_file: './config.rb', css: 'assets/css', sass: 'sass' }))
     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
     .pipe(livereload())
     .pipe(rename({suffix: '.min'}))
     .pipe(minifycss({ keepSpecialComments: 1 }))
     .pipe(gulp.dest('assets/css'))
     .pipe(notify({ message: 'Styles task complete' }));
 });


//Move 'bower_components' styles to 'assets'
gulp.task('bowerstyles', function() {
    return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css', './bower_components/fontawesome/css/font-awesome.css'])
    .pipe(gulp.dest('./assets/css'));
});

//Move 'bower_components' fonts to 'assets'
gulp.task('bowerfonts', function() {
    return gulp.src(['./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eot,svg,otf}', './bower_components/fontawesome/fonts/**/*.{ttf,woff,eot,svg,otf}', './fonts/**/*.{ttf,woff,eot,svg,otf}'])
    .pipe(gulp.dest('./assets/fonts'));
});


gulp.task('iescripts', function() {
    return gulp.src(['js/IE8_fixes/*.js'])
    .pipe(concat('ie_scripts.js'))
    .pipe(gulp.dest('./assets/js/ie8_fixes'));
});


// Clean. Delete and replace all files in the destination folder.
gulp.task('clean', function() {
  return gulp.src(['assets/css', 'assets/js', 'assets/images', 'assets/fonts'], {read: false})
    .pipe(clean());
});


// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('images', 'scripts',  'styles', 'bowerstyles', 'bowerfonts', 'iescripts');
});



// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/*.sass', ['styles']);

  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

  // Watch image files
  gulp.watch('images/**/*', ['images']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in assets/, reload on change
  gulp.watch(['assets/**', 'views/**', 'index.html']).on('change', function(file) {
    server.changed(file.path);
  });

  livereload.listen();
  gulp.watch(['sass/**', 'assets/css/*', 'assets/js/*']).on('change', livereload.changed);

});
