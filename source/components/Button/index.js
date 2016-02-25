import React from 'react'
import styles from './styles.css'

export default (props) => {
  const { theme = 'default' } = props
  return <button { ...props } className={ styles[theme] } />
}
