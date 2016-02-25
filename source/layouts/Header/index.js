import React from 'react'
import NavLink from '../../components/NavLink'
import CallToActionNavLink from '../../components/CallToActionNavLink'
import Logo from '../../components/Logo'
import Container from '../../components/Container'

import styles from './styles.css'

export default (props) => (
  <header className={ styles.base }>
    <nav className={ styles.userNav }>
      <a href="">Log in</a>
      <CallToActionNavLink to="/#register">
        Register
      </CallToActionNavLink>
    </nav>

    <div className={ styles.logo }>
      <NavLink to="/">
        <Logo variant="icon-positive" />
      </NavLink>
    </div>
  </header>
)

