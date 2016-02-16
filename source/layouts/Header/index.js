import React from 'react'
import NavLink from '../../components/NavLink'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/deploying">Deploying</NavLink>
        </li>
        <li>
          <NavLink to="/build">Building</NavLink>
          <ul>
            <li>
              <NavLink to="/build/assets">Assets</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
)

