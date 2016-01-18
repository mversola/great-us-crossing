'use strict'

const express = require('express')
const http    = require('http')
const fs      = require('fs')
const path    = require('path')

const INDEX = path.resolve(__dirname, '../.dev/index.html')
const BASE  = path.resolve(__dirname, '../.dev')

require('babel-register')
const routes = require('../config/routes').default

require('css-modules-require-hook')
const reactAppPath = require.resolve('../source')
const server = express()

server.use(express.static(BASE))

routes.forEach((route) => {
  server.get(route, (req, res) => {
    delete require.cache[reactAppPath]
    require(reactAppPath).default(route, (err, html) => {
      res.send(html)
    })
  })
})

module.exports = () =>
  http.createServer(server).listen(8080)
