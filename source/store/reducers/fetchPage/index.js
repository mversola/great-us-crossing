const { assign } = Object

export default (state, { route }) => {
  return assign({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetching'
      }
    }
  })
}
