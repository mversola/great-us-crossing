import React from 'react'
import { Link } from 'react-router'
import config from '../../../config/environment'

export default (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>
      <ul>
        <li>
          <Link to={ `${ config.client.basePath }/` }>Home</Link>
        </li>
        <li>
          <Link to={ `${ config.client.basePath }/deploying` }>Deploying</Link>
        </li>
        <li>
          <Link to={ `${ config.client.basePath }/build` }>Building</Link>
          <ul>
            <li>
              <Link to={ `${ config.client.basePath }/build/assets` }>Assets</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
)

