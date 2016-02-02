import { merge } from 'lodash/object'

export default (state, { route, error }) => {
  return merge({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'failed',
        error
      }
    }
  })
}
