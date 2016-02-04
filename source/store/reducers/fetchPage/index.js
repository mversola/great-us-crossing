import { merge } from 'lodash/object'

export default (state, { route }) => {
  return merge({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetching'
      }
    }
  })
}
