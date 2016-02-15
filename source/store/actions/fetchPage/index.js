'use strict'

import es6Promise from 'es6-promise'
import 'isomorphic-fetch'

import { context } from '../../../config'

import store from '../../'

import receivePageSuccess from '../receivePageSuccess'
import receivePageFailure from '../receivePageFailure'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}

const isClientDev = (
  typeof window !== 'undefined' &&
  (!process.env.NODE_ENV || (process.env.NODE_ENV === 'development'))
)
let host = isClientDev ? location.origin : context.host

export default (route = '/') => {
  const contentPath = `/${ route.replace(/^\/|\/$/g, '')}`

  fetch(`${ host }${context.basePath}/content${ contentPath }/index.json`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      receivePageSuccess(route, json)
    })
    .catch((err) => {
      receivePageFailure(route, error)
    })

  store.dispatch({
    type: 'FETCH_PAGE',
    route
  })
}
