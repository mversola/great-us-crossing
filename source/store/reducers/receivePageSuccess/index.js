const { assign } = Object

export default (state, { route, content }) => {
  return assign({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetched',
        content: content
      }
    }
  })
}
