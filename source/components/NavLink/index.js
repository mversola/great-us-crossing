import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'

const { client: { basePath }} = config

export default (props) => {
  const base = ((basePath === '/') || !basePath)
    ? ''
    : basePath

  return (
    <Link
      { ...props }
      to={ `${ base }${ props.to }` }
    />
  )
}
