require('css-modules-require-hook')
require('babel-register')
const fs     = require('fs')
const path   = require('path')
const routes = require('../config/routes').default
const app    = require('../source/index').default
const mkdirp = require('mkdirp')

console.log('We\'re building a thing')

var writing = 0

routes.forEach((route) => {
  console.log('Writing: ', route)
  const fileDir = path.join(
    process.cwd(),
    'dist',
    route.slice(1)
  )
  mkdirp(fileDir, () => {
    const filePath = path.join(
      fileDir,
      'index.html'
    )
    app(route, routes[path], (err, content) => {
      ++writing
      fs.writeFile(filePath, content, (err) => {
        --writing
        if (err) { throw new Error(err) }
        console.log(`File written: ${ filePath }`)
        if (writing === 0) {
          console.log('And we\'re done')
        }
      })
    })
  })
})
