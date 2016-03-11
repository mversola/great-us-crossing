import React from 'react'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import styles from './styles.css'
import config from '../../../config/environment'

const { client: { basePath }} = config

export default () => (
  <footer className={ styles.base }>
    <Container>
       <TextContent theme="alignCenter">
         <p><em>Fundraising powered by</em><img src="/layouts/Footer/everydayhero.png" /></p>
         <p>
           <a href="https://everydayhero.com/us/terms/privacy">PRIVACY POLICY</a>
           <a href={ `${basePath}/terms_and_conditions.pdf` }>TERMS &amp; CONDITIONS</a>
           <a href="https://supporter.help-us.everydayhero.com/hc/en-us/sections/201814296-Great-US-Crossing">HELP</a>
         </p>
       </TextContent>
    </Container>
  </footer>
)

