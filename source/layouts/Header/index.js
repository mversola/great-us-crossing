import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <Link to="/">Index</Link>
      <Link to="/about/">About</Link>
    </div>
  </header>
)

