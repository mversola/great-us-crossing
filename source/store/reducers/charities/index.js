import { merge } from 'lodash/object'

const fetchCharity = (charities, { slug }) => {
  return merge({}, charities, {
    ...charities.charities,
    [slug]: {
      status: 'fetching'
    }
  })
}

const receiveCharityFailure = (charities, { slug, error = '' }) => {
  return merge({}, charities, {
    ...charities,
    [slug]: {
      status: 'failed',
      error
    }
  })
}

const receiveCharitySuccess = (charities, { slug, content = '' }) => {
  return merge({}, charities, {
    ...charities,
    [slug]: {
      status: 'fetched',
      content
    }
  })
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CHARITY':
      return fetchCharity(state, action)
    case 'RECEIVE_CHARITY_FAILURE':
      return receiveCharityFailure(state, action)
    case 'RECEIVE_CHARITY_SUCCESS':
      return receiveCharitySuccess(state, action)
    default:
      return state
  }
}
