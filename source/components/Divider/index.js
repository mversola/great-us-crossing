import React from 'react'
import styles from './styles.css'

export default ({ theme = 'positive'}) => (
  <hr className={ styles[theme] } />
)
