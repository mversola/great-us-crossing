import React from 'react'
import { Link } from 'react-router'
import config from '../../config'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <Link to={ `${ config.basePath }/` }>Index</Link>
      <Link to={ `${ config.basePath }/about` }>About</Link>
    </div>
  </header>
)

