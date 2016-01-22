import 'isomorphic-fetch'

import receivePageSuccess from '../../actions/receivePageSuccess'
import receivePageFailure from '../../actions/receivePageFailure'

import { context } from '../../../config'
const { assign } = Object

export default (state, { route }) => {
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

  return assign({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetching'
      }
    }
  })
}
