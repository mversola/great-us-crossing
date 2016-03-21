import store from '../../'

export default (slug, content) => {
  store.dispatch({
    type: 'RECEIVE_CHARITY_SUCCESS',
    slug,
    content
  })
}
