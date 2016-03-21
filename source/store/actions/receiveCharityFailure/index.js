import store from '../../'

export default (route, error) => {
  store.dispatch({
    type: 'RECEIVE_CHARITY_FAILURE',
    route,
    error
  })
}
