import React from 'react'
import Container from '../Container'
import styles from './styles.css'

export default ({ background, children }) => (
  <header role="banner" className={ styles.base }>
    <div className={ styles.background }>
      { background }
    </div>
    <Container>
      <div className={ styles.content }>
        { children }
      </div>
    </Container>
  </header>
)
