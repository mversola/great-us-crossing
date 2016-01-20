import store from '../'

import {
  fetchPage,
  receivePageFailure,
  receivePageSuccess
} from '../actions'

const { assign } = Object

export default (state = { pages: {} }, action) => {
  switch (action.type) {
    case 'FETCH_PAGE':
      return fetchPage(state, action.route)
    case 'RECEIVE_PAGE_FAILURE':
      return receivePageFailure(state, action.route, action.error)
    case 'RECEIVE_PAGE_SUCCESS':
      return receivePageSuccess(state, action.route, action.content)
    default:
      return state
  }
}
