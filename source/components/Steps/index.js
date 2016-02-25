import React from 'react'
import Step from './Step'
import styles from './styles.css'

export default ({ children }) => (
  <div className={ styles.base }>
    { children }
  </div>
)
