import React from 'react'
import styles from './styles.css'

export default ({ image, children }) => (
  <div className={ styles.base }>
    <img className={ styles.image } src={ image } />
    <h3 className={ styles.stepIndicator } />
    { children }
  </div>
)
