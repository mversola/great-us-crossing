require('../config/setup')

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
const markdown = require('gulp-markdown-to-json')

const buildStatic = require('./build-static')
const devServer = require('./server')

const SOURCE_DIR = 'source'
const DEV_DIR = '.dev'
const DEST_DIR = 'dist'

const REVVED_APP_DIR = '.rev'

const BROWSERIFY_OPTS = {
  entries: [path.join(SOURCE_DIR, 'index.js')],
  transform: [babelify],
  standalone: 'app',
  cache: {},
  packageCache: {},
  debug: true
}

const CSS_MODULES_OPTS = {
  output: path.join(DEV_DIR, 'main.css'),
  generateScopedName: require('../config/css-modules-scope-generator')
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
    .pipe(gulp.dest(DEV_DIR))

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

const DATA = [
  '**/*.json'
]

const BUNDLEABLE_ASSETS = [].concat(CSS, JS).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

const STATIC_ASSETS = [].concat(IMAGES).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

gulp.task('static-assets', () => {
  return gulp.src(STATIC_ASSETS)
    .pipe(gulp.dest(DEV_DIR))
})

gulp.task('content:dev', () => {
  return gulp.src(path.join(SOURCE_DIR, 'content/**/*.md'))
    .pipe(markdown())
    .on('error', function (e) {
      gutil.log(gutil.colors.red(err))
      this.emit('end')
    })
    .pipe(gulp.dest(path.join(DEV_DIR, 'content')))
})

gulp.task('content:prod',  () => {
  return gulp.src(path.join(SOURCE_DIR, 'content/**/*.md'))
    .pipe(markdown())
    .pipe(gulp.dest(path.join(DEST_DIR, 'content')))
})

const REVABLE = [].concat(JS, CSS, IMAGES).map(
  asset => path.join(DEV_DIR, asset)
)

gulp.task('revision', ['bundle', 'static-assets', 'content:prod'], () => {
  return gulp.src(REVABLE)
    .pipe(rev())
    .pipe(gulp.dest(DEST_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(DEST_DIR))
})

gulp.task('static', ['content:prod', 'revreplace:app'], () => {
  require('babel-register')
  const routes = require('../config/routes').default
  const app    = require(path.join('../', REVVED_APP_DIR, 'index.js')).default

  return buildStatic(DEST_DIR, routes, app)
})

const REV_REPLACEABLE_ASSETS = [].concat(JS, CSS, DATA).map(
  asset => path.join(DEST_DIR, asset)
)

gulp.task('revreplace:assets', ['revision'], () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE_ASSETS)
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(DEST_DIR))
})

const REV_REPLACEABLE_APP = [].concat(JS, CSS).map(
  asset => path.join(SOURCE_DIR, asset)
)

gulp.task('revreplace:app', ['revision'], () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE_APP)
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(REVVED_APP_DIR))
})

gulp.task('watch:content', ['content:dev'], () => {
  return gulp.watch(path.join(SOURCE_DIR, 'content/**/*.md'), () => {
    return gulp.start('content:dev')
  })
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
  gulp.start(['watch:static-assets', 'watch:bundle', 'watch:content'])
})

gulp.task('serve', devServer)

gulp.task('dev', ['serve', 'watch'])

gulp.task('build', ['revreplace:assets', 'static'])
