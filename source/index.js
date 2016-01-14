import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import Site from './Site'

if (typeof document !== 'undefined') {
  render(Site, document)
}

export default function staticRender (path, locals, callback) {
  match(
    { routes: Site, location: path },
    (error, redirectLocation, renderProps) => {
      if (error) {
        return callback(error)
      }

      const content = '<!DOCTYPE html>' + renderToString(
        <RoutingContext {...renderProps} />
      )
      callback(null, content)
    }
  )
}
