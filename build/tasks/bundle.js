'use strict'

const babelify = require('babelify')
const browserifyinc = require('browserify-incremental')
const buffer = require('vinyl-buffer')
const cssModulesify = require('css-modulesify')
const cssNext = require('postcss-cssnext')
const autoprefixer = require('autoprefixer')
const envify = require('envify/custom')
const es3ify = require('es3ify')
const uglify = require('gulp-uglify')
const markdownify = require('markdownify')
const gulp = require('gulp')
const gutil = require('gulp-util')
const insertGlobals = require('insert-module-globals')
const path = require('path')
const source = require('vinyl-source-stream')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const SERVER_APP_DIR = config.SERVER_APP_DIR

const isDev = !process.env.NODE_ENV || (process.env.NODE_ENV === 'development')

const BROWSERIFY_OPTS = {
  entries: [path.join(SOURCE_DIR, 'index.js')],
  transform: [markdownify, babelify, es3ify],
  standalone: 'app',
  debug: process.env.NODE_ENV !== 'production'
}

const CSS_MODULES_OPTS = {
  output: path.join(DEV_DIR, 'main.css'),
  generateScopedName: require('../css-modules-scope-generator'),
  after: [cssNext, autoprefixer]
}

const clientBundler = browserifyinc(Object.assign({}, BROWSERIFY_OPTS, {
  cache: {},
  packageCache: {},
}))
clientBundler.transform(envify({
  NODE_ENV: process.env.NODE_ENV
}))
clientBundler.plugin(cssModulesify, CSS_MODULES_OPTS)

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

const bundle = (bundler, outputDir) => () => {
  let stream = bundler.bundle()

  if (isDev) {
    stream
      .on('error', function (err) {
        gutil.log(gutil.colors.red(err))
        this.emit('end')
      })
  }

  stream = stream
    .pipe(source('main.js'))
    .pipe(buffer())

  if (!isDev) {
    stream = stream
      .pipe(uglify())
  }

  return stream
    .pipe(gulp.dest(outputDir))
}

clientBundler.on('log', gutil.log)
serverBundler.on('log', gutil.log)

module.exports = {
  client: bundle(clientBundler, DEV_DIR),
  server: bundle(serverBundler, SERVER_APP_DIR)
}
