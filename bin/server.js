const express = require('express')
const http    = require('http')
const fs      = require('fs')
const path    = require('path')

const INDEX = path.resolve(__dirname, '../.dev/index.html')
const BASE  = path.resolve(__dirname, '../.dev')

require('babel-register')
const routes = require('../config/routes').default

require('css-modules-require-hook')
const staticRender = require(require.resolve('../source')).default

const server = express()

server.use(express.static(BASE))

routes.forEach((route) => {
  server.get(route, (req, res) => {
    staticRender(route, (err, html) => {
      res.send(html)
    })
  })
})

http.createServer(server).listen(8080)
