import React from 'react'
import { Route, IndexRoute } from 'react-router'

import store from '../store'
import fetchPage from '../store/actions/fetchPage'

import Home from '../pages/Home'
import SimplePage from '../components/SimplePage'

import { context } from '../config'

const isFetched = ({ status }) =>
  status === 'fetched'

const isFailed = ({ status }) =>
  status === 'failed'

const handlePageEnter = (nextState, replace, callback) => {
  const route = nextState.params.path.replace(/\/$/, '')
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
  fetchPage(route)
}

export default (
  <Route
    path={ `${ context.basePath }/` }
    component={ ({ children }) => children }>
    <IndexRoute component={ Home } />
    <Route
      path=":path"
      component={ SimplePage }
      onEnter={ handlePageEnter }
    />
  </Route>
)
