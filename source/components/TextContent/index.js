import React from 'react'
import styles from './styles.css'

export default ({ children, theme = 'default' }) => (
  <div className={ styles[theme] }>{ children }</div>
)
