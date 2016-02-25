import React from 'react'
import styles from './styles.css'

export default ({ number, label }) => (
  <div className={ styles.base }>
    <div className={ styles.number }>
      { number }
    </div>
    <div className={ styles.label }>
      { label }
    </div>
  </div>
)
