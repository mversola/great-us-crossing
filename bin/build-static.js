'use strict'

const fs     = require('fs')
const mkdirp = require('mkdirp')
const path   = require('path')

module.exports = function buildStatic (destDir, routes, app) {
  return new Promise((resolve, reject) => {
    let writing = 0
    let written = []

    routes.forEach((route) => {
      const fileDir = path.join(
        destDir,
        route.slice(1)
      )

      mkdirp(fileDir, (err) => {
        if (err) { return reject(err) }

        const filePath = path.join(
          fileDir,
          'index.html'
        )

        app(route, (err, content) => {
          if (err) { return reject(err) }
          ++writing
          fs.writeFile(filePath, content, (err) => {
            if (err) { return reject(err) }
            --writing
            written.push(filePath)
            if (writing === 0) {
              resolve(written)
            }
          })
        })
      })
    })
  })
}
