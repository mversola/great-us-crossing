const gulp = require('gulp')
const revReplace = require('gulp-rev-replace')
const path = require('path')

const environment = require('../../config/environment')
const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const DEST_DIR = config.DEST_DIR
const SERVER_APP_DIR = config.SERVER_APP_DIR
const CSS = config.CSS
const JS = config.JS
const DATA = config.DATA

const revReplaceOptions = (manifest) => ({
  manifest: manifest,
  replaceInExtensions: ['.js', '.css', '.json'],
  modifyUnreved: (name) => `/${ name }`,
  modifyReved: (name) => `${ environment.client.host }${ environment.client.basePath }/${ name }`
})

const REV_REPLACEABLE_ASSETS = [].concat(JS, CSS, DATA).map(
  asset => path.join(DEST_DIR, asset)
)

const replaceInAssets = () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE_ASSETS)
    .pipe(revReplace(revReplaceOptions(manifest)))
    .pipe(gulp.dest(DEST_DIR))
}

const REV_REPLACEABLE_SERVER_APP = [].concat(JS, CSS).map(
  asset => path.join(SERVER_APP_DIR, asset)
)

const replaceInServerBundle = () => {
  const manifest = gulp.src(path.join(DEST_DIR, 'rev-manifest.json'))

  return gulp.src(REV_REPLACEABLE_SERVER_APP)
    .pipe(revReplace(revReplaceOptions(manifest)))
    .pipe(gulp.dest(SERVER_APP_DIR))
}

module.exports = {
  assets: replaceInAssets,
  serverBundle: replaceInServerBundle
}
