import es6Promise from 'es6-promise'
import 'isomorphic-fetch'

import { context } from '../../../config'

import store from '../../'

import receivePageSuccess from '../receivePageSuccess'
import receivePageFailure from '../receivePageFailure'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}

export default (route = '/') => {
  const contentPath = `/${ route.replace(/^\/|\/$/g, '')}`

  fetch(`${ context.host }${context.basePath}/content${ contentPath }/index.json`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      receivePageSuccess(route, json)
    })
    .catch((err) => {
      console.log(err)
      receivePageFailure(route, error)
    })

  store.dispatch({
    type: 'FETCH_PAGE',
    route
  })
}
