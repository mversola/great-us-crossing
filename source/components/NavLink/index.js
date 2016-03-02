import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'

const { client: { basePath }} = config

export default (props) => (
  <Link
    { ...props }
    to={ `${ basePath }${ props.to }` }
  />
)
