import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { context } from '../config'

import Home from './Home'
import FourOhFour from './FourOhFour'

const base = !!context.basePath
  ? context.basePath
  : '/'

export default (
  <Route
    path={ base }
    component={ ({ children }) => children }>
    <IndexRoute
      component={ Home }
    />
    <Route
      path="*"
      component={ FourOhFour }
    />
  </Route>
)
