import { merge } from 'lodash/object'

const fetchPage = (pages, { route }) => {
  return merge({}, pages, {
    ...pages.pages,
    [route]: {
      status: 'fetching'
    }
  })
}

const receivePageFailure = (pages, { route, error }) => {
  return merge({}, pages, {
    ...pages,
    [route]: {
      status: 'failed',
      error
    }
  })
}

const receivePageSuccess = (pages, { route, content }) => {
  return merge({}, pages, {
    ...pages,
    [route]: {
      status: 'fetched',
      content: content
    }
  })
}

export default (state = {}, action) => {
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
