import DocumentTitle from 'react-document-title'
import React from 'react'
import Router, { match, RoutingContext } from 'react-router'
import { createHistory } from 'history'
import { render } from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import Document from './layouts/Document'
import Routes from './Routes'

if (typeof window !== 'undefined') {
  const scrollToHash = () => {
    if (window.location.hash) {
      let target = document.querySelector(window.location.hash)
      if (target) target.scrollIntoView()
    }
  }

  match(
    { routes: Routes, location },
    (error, redirectLocation, renderProps) => {
      render(
        <Router
          { ...renderProps }
          history={ createHistory() }
          onUpdate={ scrollToHash }
        />,
        document.getElementById('mount')
      )
    }
  )
}

export default function staticRender (route, callback) {
  try {
    match(
      { routes: Routes, location: route },
      (error, redirectLocation, renderProps) => {
        if (error) {
          return callback(error)
        }
        const content = renderToString(
          <RoutingContext { ...renderProps } />
        )
        const document = '<!DOCTYPE html>' + renderToStaticMarkup(
          <Document title={ DocumentTitle.rewind() } content={ content } />
        )
        callback(null, document)
      }
    )
  } catch (error) {
    callback(error)
  }
}
