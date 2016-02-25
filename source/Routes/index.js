import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { context } from '../config'

import Home from './Home'
import FourOhFour from './FourOhFour'

export default (
  <Route
    path={ `${ context.basePath }/` }
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
