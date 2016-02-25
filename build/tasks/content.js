const gulp = require('gulp')
const gutil = require('gulp-util')
const markdown = require('gulp-markdown-to-json')
const path = require('path')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const DEST_DIR = config.DEST_DIR

const contentDev = () => {
  return gulp.src(path.join(SOURCE_DIR, 'content/**/*.md'))
    .pipe(markdown())
    .on('error', function (e) {
      gutil.log(gutil.colors.red(err))
      this.emit('end')
    })
    .pipe(gulp.dest(path.join(DEV_DIR, 'content')))
}

const contentProd = () => {
  return gulp.src(path.join(SOURCE_DIR, 'content/**/*.md'))
    .pipe(markdown())
    .pipe(gulp.dest(path.join(DEST_DIR, 'content')))
}

module.exports = {
  dev: contentDev,
  prod: contentProd
}

