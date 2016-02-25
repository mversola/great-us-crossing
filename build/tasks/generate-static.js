const gulp = require('gulp')
const path = require('path')

const buildStatic = require('../build-static')
const config = require('./config')
const DEST_DIR = config.DEST_DIR
const SERVER_APP_DIR = config.SERVER_APP_DIR

module.exports = () => {
  const routes = require('../../config/static-routes')
  const app    = require(path.join('../../', SERVER_APP_DIR, 'main.js')).default

  return buildStatic(DEST_DIR, routes, app)
}

