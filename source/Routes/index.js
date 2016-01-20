import React from 'react'
import { Route, IndexRoute } from 'react-router'

import store from '../store'

import Home from '../pages/Home'
import SimplePage from '../components/SimplePage'

const isFetched = ({ status }) =>
  status === 'fetched'

const isFailed = ({ status }) =>
  status === 'failed'

const handlePageEnter = (nextState, replace, callback) => {
  const route = nextState.location.pathname.replace(/\/$/, '')
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (isFetched(state.pages[route])) {
      callback()
      unsubscribe()
    } else if (isFailed(state.pages[route])) {
      console.error(state.pages[route])
      unsubscribe()
    }
  })
  store.dispatch({
    type: 'FETCH_PAGE',
    route
  })
}

export default (
  <Route path="/" component={ ({ children }) => children }>
    <IndexRoute
      component={ Home }
    />
    <Route
      path="/:path"
      component={ SimplePage }
      onEnter={ handlePageEnter }
    />
  </Route>
)
