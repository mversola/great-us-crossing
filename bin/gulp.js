const babelify = require('babelify')
const browserifyinc = require('browserify-incremental')
const buffer = require('vinyl-buffer')
const cssModulesify = require('css-modulesify')
const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')
const rev = require('gulp-rev')
const revReplace = require('gulp-rev-replace')
const source = require('vinyl-source-stream')

const buildStatic = require('./build-static')
const devServer = require('./server')

const SOURCE_DIR = 'source'
const BUNDLE_DIR = '.dev'
const DEST_DIR = 'dist'

const BROWSERIFY_OPTS = {
  entries: [path.join(SOURCE_DIR, 'index.js')],
  transform: [babelify],
  standalone: 'app',
  cache: {},
  packageCache: {},
  debug: true
}

const CSS_MODULES_OPTS = {
  output: path.join(BUNDLE_DIR, 'main.css')
}

const bundler = browserifyinc(Object.assign({}, BROWSERIFY_OPTS))
bundler.plugin(cssModulesify, CSS_MODULES_OPTS)

const bundle = () =>
  bundler
    .bundle()
    .on('error', function (err) {
      gutil.log(gutil.colors.red(err))
      this.emit('end')
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(BUNDLE_DIR))

gulp.task('bundle', bundle)
bundler.on('log', gutil.log)

const JS = [
  '**/*.js'
]

const CSS = [
  '**/*.css'
]

const IMAGES = [
  '**/*.png',
  '**/*.jpg',
  '**/*.gif'
]

const BUNDLEABLE_ASSETS = [].concat(CSS, JS).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

const STATIC_ASSETS = [].concat(IMAGES).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

gulp.task('static-assets', () => {
  return gulp.src(STATIC_ASSETS)
    .pipe(gulp.dest(BUNDLE_DIR))
})

const REVABLE = [].concat(JS, CSS, IMAGES).map(
  asset => path.join(BUNDLE_DIR, asset)
)

gulp.task('revision', ['bundle', 'static-assets'], () => {
  return gulp.src(REVABLE)
    .pipe(rev())
    .pipe(gulp.dest(DEST_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(DEST_DIR))
})

const REV_REPLACEABLE = [].concat(JS, CSS).map(
  asset => path.join(DEST_DIR, asset)
)

gulp.task('revreplace', ['revision'], () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE)
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(DEST_DIR))
})

gulp.task('build:static', ['revreplace'], () => {
  const manifest   = require(path.join('../', DEST_DIR, 'rev-manifest.json'))
  const bundleName = manifest['main.js']

  require('babel-register')
  const routes = require('../config/routes').default
  const app    = require(path.join('../', path.join(DEST_DIR), bundleName)).default

  return buildStatic(DEST_DIR, routes, app)
})

gulp.task('watch:bundle', ['bundle'], () => {
  return gulp.watch(BUNDLEABLE_ASSETS, bundle)
})

gulp.task('watch:static-assets', ['static-assets'], () => {
  return gulp.watch(STATIC_ASSETS, () => {
    return gulp.start('static-assets')
  })
})

gulp.task('watch', () => {
  gulp.start(['watch:static-assets', 'watch:bundle'])
})

gulp.task('serve', devServer)

gulp.task('dev', ['serve', 'watch'])

gulp.task('build:prod', ['build:static'])
