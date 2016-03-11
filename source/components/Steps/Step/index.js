import React from 'react'
import Icon from '../../Icon'
import styles from './styles.css'

export default ({ image, icon, children }) => (
  <div className={ styles.base }>
    <div className={ styles.circle }>
      <img className={ styles.image } src={ image } />
      <Icon icon={ icon } />
    </div>
    <h3 className={ styles.stepIndicator } />
    { children }
  </div>
)
