import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'

export default ({ to, children }) => (
  <Link to={ `${ config.client.basePath }${ to }` }>
    { children }
  </Link>
)
