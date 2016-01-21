import React from 'react'
import { Link } from 'react-router'
import config from '../../../config/environment'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <Link to={ `${ config.client.basePath }/` }>Index</Link>
      <Link to={ `${ config.client.basePath }/about` }>About</Link>
    </div>
  </header>
)

