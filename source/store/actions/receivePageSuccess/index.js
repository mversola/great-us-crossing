import store from '../../'

export default (route, content) => {
  store.dispatch({
    type: 'RECEIVE_PAGE_SUCCESS',
    route,
    content
  })
}
