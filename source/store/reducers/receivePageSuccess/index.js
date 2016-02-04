import { merge } from 'lodash/object'

export default (state, { route, content }) => {
  return merge({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetched',
        content: content
      }
    }
  })
}
