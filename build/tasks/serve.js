const devServer = require('../server')
const browserSync = require('browser-sync').create()

module.exports = () => {
  browserSync.init({
    proxy: "localhost:8080"
  })
  devServer()
}

