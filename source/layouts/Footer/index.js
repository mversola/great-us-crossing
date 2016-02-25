import React from 'react'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import styles from './styles.css'

export default () => (
  <footer className={ styles.base }>
    <Container>
       <TextContent>
         <p><em>Fundraising powered by</em><img src="/layouts/Footer/everydayhero.png" /></p>
         <p>
           <a href="">PRIVACY POLICY</a>
           <a href="">TERMS &amp; CONDITIONS</a>
           <a href="">HELP</a>
         </p>
       </TextContent>
    </Container>
  </footer>
)

