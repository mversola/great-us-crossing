import React from 'react'
import { Link } from 'react-router'
import config from '../../../config/environment'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <Link to={ `${ config.client.basePath }/` }>Home</Link>
      <Link to={ `${ config.client.basePath }/build` }>Building</Link>
      <Link to={ `${ config.client.basePath }/build/assets` }>Building</Link>
    </div>
  </header>
)

