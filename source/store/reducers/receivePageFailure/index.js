const { assign } = Object

export default (state, { route, error }) => {
  return assign({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'failed',
        error
      }
    }
  })
}
