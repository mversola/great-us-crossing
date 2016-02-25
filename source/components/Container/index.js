import React from 'react'
import styles from './styles.css'

export default ({ children, type = 'default' }) => (
  <div className={ styles[type] }>
    { children }
  </div>
)
