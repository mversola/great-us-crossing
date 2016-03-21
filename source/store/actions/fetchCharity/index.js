'use strict'

import fs from 'fs'
import path from 'path'

import es6Promise from 'es6-promise'
import 'isomorphic-fetch'

import store from '../../'

import receiveCharitySuccess from '../receiveCharitySuccess'
import receiveCharityFailure from '../receiveCharityFailure'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}

const isDev = (process.env.NODE_ENV || 'development') === 'developement'

const server = (slug) => {
  const sourceDir = isDev ? '.dev' : 'dist'
  const filePath = path.join(
    process.cwd(),
    sourceDir,
    'content/featured-charities',
    slug,
    'index.json'
  )

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) throw new Error(err)

    receiveCharitySuccess(slug, JSON.parse(content))
  })
}

const client = (slug) => {
  const path = `/content/featured-charities/${slug}/index.json`

  global.fetch(path)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      receiveCharitySuccess(slug, json)
    })
    .catch((err) => {
      if (err && process.env.NODE_ENV === 'development') {
        console.error(err)
      }
      receiveCharityFailure(slug, err)
    })
}

export default (slug) => {
  if (typeof window !== 'undefined') {
    client(slug)
  } else {
    server(slug)
  }

  store.dispatch({
    type: 'FETCH_CHARITY',
    slug
  })
}
