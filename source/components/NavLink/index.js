import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'
import styles from './styles.css'

const { client: { basePath }} = config

export default (props) => (
  <center><img className={ styles.image } src={ props.image } /></center>
  <Link
    { ...props }
    to={ `${ basePath }${ props.to }` }
  />
)
