import store from '../../'

export default (route) => {
  store.dispatch({
    type: 'FETCH_PAGE',
    route
  })
}
