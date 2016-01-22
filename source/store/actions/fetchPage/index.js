import 'isomorphic-fetch'

import { context } from '../../../config'

import store from '../../'

import receivePageSuccess from '../receivePageSuccess'
import receivePageFailure from '../receivePageFailure'

export default (route) => {
  const contentFile = route.replace(/^\/|\/$/g, '')

  fetch(`${ context.host }${context.basePath}/content/${ contentFile }.json`)
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
