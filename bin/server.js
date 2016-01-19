'use strict'

const express = require('express')
const http    = require('http')
const fs      = require('fs')
const path    = require('path')

const BASE  = path.resolve(__dirname, '../.dev')

const routes = require('../config/routes')

const server = express()

server.use(express.static(BASE))

const clearCache = (parent) => {
  if (!parent || !parent.children || !parent.children.length) {
    return
  }
  parent.children.forEach((child) => {
    delete parent.constructor._cache[child.id]
    clearCache(child)
  })
  delete require.cache[parent.id]
}

routes.forEach((route) => {
  server.get(route, (req, res) => {
    const reactAppPath = require.resolve('../.server/main')
    delete require.cache[reactAppPath]
    require(reactAppPath).default(route, (err, html) => {
      if (err) { return console.log(err) }
      res.send(html)
    })
  })
})

module.exports = () =>
  http.createServer(server).listen(8080)
