const gulp = require('gulp')
const path = require('path')

const browserSync = require('browser-sync').create()

const bundle = require('./bundle')
gulp.task('bundle:client-app', () => {
  return bundle.client().on('end', browserSync.reload)
})
gulp.task('bundle:server-app', bundle.server)

const scss = require('./scss')
gulp.task('sass', scss)

const content = require('./content')
gulp.task('content:dev', content.dev)
gulp.task('content:prod', content.prod)

const revision = require('./revision')
gulp.task('revision', ['bundle:client-app', 'sass', 'static-assets', 'content:prod'], revision)

const staticAssets = require('./static-assets')
gulp.task('static-assets', staticAssets)

const replaceRevised = require('./replace-revised-paths')
gulp.task('revreplace:assets', ['revision'], replaceRevised.assets)
gulp.task('revreplace:server-bundle', ['revision', 'bundle:server-app'], replaceRevised.serverBundle)

const generateStatic = require('./generate-static')
gulp.task('generate-static', ['revreplace:server-bundle', 'revreplace:assets'], generateStatic)

const serve = require('./serve')(browserSync)
gulp.task('serve', ['bundle:server-app'], serve)

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const CSS = config.CSS
const IMAGES = config.IMAGES
const JS = config.JS

const BUNDLEABLE_ASSETS = [].concat(CSS, JS).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

const STATIC_ASSETS = [].concat(IMAGES).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

gulp.task('watch:bundle', ['bundle:client-app', 'bundle:server-app'], () => {
  return gulp.watch(BUNDLEABLE_ASSETS, ['bundle:client-app', 'bundle:server-app'])
})

gulp.task('watch:content', ['content:dev'], () => {
  return gulp.watch(path.join(SOURCE_DIR, 'content/**/*.md'), ['content:dev'])
})

gulp.task('watch:sass', ['sass'], () => {
  return gulp.watch(path.join(SOURCE_DIR, '**/*.scss'), ['sass'])
})

gulp.task('watch:static-assets', ['static-assets'], () => {
  return gulp.watch(STATIC_ASSETS, ['static-assets'])
})

gulp.task('watch', [
  'watch:static-assets',
  'watch:bundle',
  'watch:content',
  'watch:sass'
])

gulp.task('dev', [
  'serve', 'watch'
])

gulp.task('build', [
  'generate-static'
])
