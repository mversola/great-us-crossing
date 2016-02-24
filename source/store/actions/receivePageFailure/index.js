import store from '../../'

export default (route, error) => {
  store.dispatch({
    type: 'RECEIVE_PAGE_FAILURE',
    route,
    error
  })
}
