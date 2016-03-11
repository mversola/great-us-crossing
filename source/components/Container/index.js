import React from 'react'
import styles from './styles.css'

export default ({ children, type = 'padded' }) => (
  <div className={ styles[type] }>
    { children }
  </div>
)
