import React from 'react'
import Container from '../Container'
import styles from './styles.css'

export default ({ id, background, children, theme = 'base' }) => (
  <section id={ id } className={ styles[theme] }>
    { !!background &&
      <div className={ styles.background }>
        { background }
      </div> }
    <Container>
      { children }
    </Container>
  </section>
)
