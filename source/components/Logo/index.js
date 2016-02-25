import React from 'react'
import styles from './styles.css'

export default ({ variant = 'positive' }) => (
  <div className={ styles[variant] } />
)
