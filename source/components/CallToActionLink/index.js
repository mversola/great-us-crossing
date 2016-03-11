import React from 'react'
import styles from '../Button/styles.css'

export default (props) => {
  const { theme = 'default' } = props
  return <a { ...props } className={ styles[theme] } />
}
