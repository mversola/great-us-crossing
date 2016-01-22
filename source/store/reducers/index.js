import store from '../'

import fetchPage from './fetchPage'
import receivePageFailure from './receivePageFailure'
import receivePageSuccess from './receivePageSuccess'

export default (state = { pages: {} }, action) => {
  switch (action.type) {
    case 'FETCH_PAGE':
      return fetchPage(state, action)
    case 'RECEIVE_PAGE_FAILURE':
      return receivePageFailure(state, action)
    case 'RECEIVE_PAGE_SUCCESS':
      return receivePageSuccess(state, action)
    default:
      return state
  }
}
