import React from 'react'
import NavLink from '../../components/NavLink'
import CallToActionLink from '../../components/CallToActionLink'
import Logo from '../../components/Logo'

import styles from './styles.css'

export default (props) => (
  <header className={styles.FixedHeader}>
    <div className={styles.FixedHeader__icon}>
      <NavLink to='/'>
        <Logo variant='icon-positive' />
      </NavLink>
    </div>
    <div className={styles.FixedHeader__cta}>
      <CallToActionLink href='https://greatuscrossing.everydayhero.com/us/get-started'>
        Register
      </CallToActionLink>
    </div>
  </header>
)

