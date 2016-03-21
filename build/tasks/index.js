const gulp = require('gulp')
const path = require('path')

const browserSync = require('browser-sync').create()

const bundle = require('./bundle')
gulp.task('bundle:client-app', bundle.client)
gulp.task('bundle:server-app', bundle.server)
gulp.task('bundle:all', ['bundle:client-app', 'bundle:server-app'], () => {
  browserSync.reload()
})

const iconFont = require('./icon-font')
gulp.task('icon-font', iconFont)

const scss = require('./scss')
gulp.task('sass', scss)

const content = require('./content')
gulp.task('content', content)

const revision = require('./revision')
gulp.task('revision', ['bundle:all', 'sass', 'static-assets', 'content'], revision)

const staticAssets = require('./static-assets')
gulp.task('static-assets', ['icon-font'], staticAssets)

const replaceRevised = require('./replace-revised-paths')
gulp.task('revreplace:assets', ['revision'], replaceRevised.assets)
gulp.task('revreplace:server-bundle', ['revision'], replaceRevised.serverBundle)

const generateStatic = require('./generate-static')
gulp.task('generate-static', ['revreplace:server-bundle', 'revreplace:assets'], generateStatic)

const serve = require('./serve')(browserSync)
gulp.task('serve', ['bundle:server-app'], serve)

const awsConfig  = require('../../aws.json')
const deployRoot = require('./deploy')(
 Object.assign({}, awsConfig.default, awsConfig.root)
)
gulp.task('deploy:prod:root', deployRoot)

const deployWWW = require('./deploy')(
 Object.assign({}, awsConfig.default, awsConfig.www)
)
gulp.task('deploy:prod:www', deployWWW)
gulp.task('deploy:prod', ['deploy:prod:root', 'deploy:prod:www'])

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

gulp.task('watch:bundle', ['bundle:all'], () => {
  return gulp.watch(BUNDLEABLE_ASSETS, ['bundle:all'])
})

const CONTENT_SOURCES = ['content/**/*.md', 'content/**/*.json'].map((source) => (
  path.join(SOURCE_DIR, source)
))

gulp.task('watch:content', ['content'], () => {
  return gulp.watch(CONTENT_SOURCES, ['content'])
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
