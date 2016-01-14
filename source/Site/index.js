import React from 'react'
import Router, { Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'

import Home from '../pages/Home'
import About from '../pages/About'

const history = (function () {
  if (typeof document !== 'undefined') {
    return createHistory()
  } else {
    return null
  }
})()

const Document = (props) => (
  <html>
    <head>
      <title>Static site starter</title>
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      { props.children }
      <script src="/main.js" />
    </body>
  </html>
)

export default (
  <Router history={ history }>
    <Route path="/" component={ Document }>
      <IndexRoute component={ Home } />
      <Route path="/about" component={ About } />
    </Route>
  </Router>
)
