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

const SERVER_APP_DIR = '.server'

const BROWSERIFY_OPTS = {
  entries: [path.join(SOURCE_DIR, 'index.js')],
  transform: [babelify],
  standalone: 'app',
  debug: true
}

const CSS_MODULES_OPTS = {
  output: path.join(DEV_DIR, 'main.css'),
  generateScopedName: require('./css-modules-scope-generator')
}

const clientBundler = browserifyinc(Object.assign({}, BROWSERIFY_OPTS, {
  cache: {},
  packageCache: {},
}))
clientBundler.plugin(cssModulesify, CSS_MODULES_OPTS)

const insertGlobals = require('insert-module-globals')

const serverBundler = browserifyinc(Object.assign({}, BROWSERIFY_OPTS, {
  cache: {},
  packageCache: {},
  browserField: false,
  builtins: false,
  insertGlobalVars: {
    __filename: insertGlobals.vars.__filename,
    __dirname: insertGlobals.vars.__dirname,
    process: () => {}
  }
}))
serverBundler.plugin(cssModulesify, CSS_MODULES_OPTS)

const bundle = (bundler, outputDir) => () =>
  bundler
    .bundle()
    .on('error', function (err) {
      gutil.log(gutil.colors.red(err))
      this.emit('end')
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(outputDir))

gulp.task('bundle:client-app', bundle(clientBundler, DEV_DIR))
gulp.task('bundle:server-app', bundle(serverBundler, SERVER_APP_DIR))
clientBundler.on('log', gutil.log)
serverBundler.on('log', gutil.log)

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

gulp.task('revision', ['bundle:client-app', 'static-assets', 'content:prod'], () => {
  return gulp.src(REVABLE)
    .pipe(rev())
    .pipe(gulp.dest(DEST_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(DEST_DIR))
})

gulp.task('static', ['content:prod', 'revreplace:server-app'], () => {
  const routes = require('../config/routes')
  const app    = require(path.join('../', SERVER_APP_DIR, 'main.js')).default

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

const REV_REPLACEABLE_SERVER_APP = [].concat(JS, CSS).map(
  asset => path.join(SERVER_APP_DIR, asset)
)

gulp.task('revreplace:server-app', ['revision', 'bundle:server-app'], () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE_SERVER_APP)
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(SERVER_APP_DIR))
})

gulp.task('watch:content', ['content:dev'], () => {
  return gulp.watch(path.join(SOURCE_DIR, 'content/**/*.md'), () => {
    return gulp.start('content:dev')
  })
})

gulp.task('watch:bundle', ['bundle:client-app', 'bundle:server-app'], () => {
  return gulp.watch(BUNDLEABLE_ASSETS, () => {
    gulp.start(['bundle:client-app', 'bundle:server-app'])
  })
})

gulp.task('watch:static-assets', ['static-assets'], () => {
  return gulp.watch(STATIC_ASSETS, () => {
    return gulp.start('static-assets')
  })
})

gulp.task('watch', () => {
  gulp.start(['watch:static-assets', 'watch:bundle', 'watch:content'])
})

gulp.task('serve', ['bundle:server-app'], devServer)

gulp.task('dev', ['serve', 'watch'])

gulp.task('build', ['revreplace:assets', 'static'])
