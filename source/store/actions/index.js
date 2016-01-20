import 'isomorphic-fetch'
import store from '../'

const { assign } = Object

export const fetchPage = (state, route) => {
  const contentFile = route.replace(/^\/|\/$/g, '')
  fetch(`http://localhost:8080/content/${ contentFile }.json`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      store.dispatch({
        type: 'RECEIVE_PAGE_SUCCESS',
        route,
        content: json
      })
    })
    .catch((err) => {
      store.dispatch({
        type: 'RECEIVE_PAGE_FAILURE',
        route,
        error: err
      })
    })

  return assign({}, state, {
    pages: {
      ...state.pages,
      [route]: {
        status: 'fetching'
      }
    }
  })
}

export const receivePageFailure = (state, route, error) => {
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

export const receivePageSuccess = (state, route, content) => {
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
