'use strict'

const express = require('express')
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const app = express()

const BASE = path.resolve(__dirname, '../dist')
app.use(express.static(BASE))

const config = require('../config/environment')

const handleError = (error, reject) => {
  return reject(error)
}

module.exports = function buildStatic (destDir, routes, reactApp) {
  return new Promise((resolve, reject) => {
    let writing = 0
    let written = []

    routes.forEach((route) => {
      const fileDir = path.join(
        destDir,
        route.slice(1)
      )

      mkdirp(fileDir, (err) => {
        if (err) {
          return handleError(err, reject)
        }

        const filePath = path.join(
          fileDir,
          'index.html'
        )

        reactApp(`${config.server.basePath}${route}`, (err, content) => {
          if (err) {
            return handleError(err, reject)
          }
          ++writing
          fs.writeFile(filePath, content, (err) => {
            if (err) {
              return handleError(err, reject)
            }
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
