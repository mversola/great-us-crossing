import React from 'react'
import Container from '../Container'
import TextContent from '../TextContent'
import styles from './styles.css'

export default ({ background, children }) => (
  <header role="banner" className={ styles.base }>
    <div className={ styles.background }>
      { background }
    </div>
    <Container>
      <div className={ styles.content }>
        <TextContent>
          { children }
        </TextContent>
      </div>
    </Container>
  </header>
)
