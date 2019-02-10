const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function prefix() {
    return gulp.src('_site/assets/main.css')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('_site/assets'))
}

exports.prefix = prefix;
