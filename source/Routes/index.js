import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { context } from '../config'

import SimpleContent, { fetchContent } from './SimpleContent'

export default (
  <Route
    path={ `${ context.basePath }/` }
    component={ ({ children }) => children }>
    <IndexRoute
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
    <Route
      path="*"
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
  </Route>
)
