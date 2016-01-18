import React from 'react'
import Main from '../../layouts/Main'
import styles from './styles.css'

export default () => (
  <Main title="My cool about page">
    <article className={ styles.About }>
      <p>About component!</p>
      <p><img src="/pages/About/john-abbott.jpg" /></p>
    </article>
  </Main>
)
