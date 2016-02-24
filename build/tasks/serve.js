const devServer = require('../server')

module.exports = (browserSync) => (callback) => {
  browserSync.init({
    proxy: "localhost:8080"
  })
  devServer(callback)
}

