import React from 'react'
import NavLink from '../NavLink'
import styles from '../Button/styles.css'

export default (props) => {
  const { theme = 'default' } = props
  return <NavLink { ...props } className={ styles[theme] } />
}
