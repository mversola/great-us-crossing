import React from 'react'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import CallToActionLink from '../../components/CallToActionLink'
import styles from './styles.css'
import config from '../../../config/environment'

const { client: { host, basePath }} = config

export default () => (
  <footer className={ styles.base }>
    <Container>
       <TextContent theme="alignCenter">
        <p>
          <CallToActionLink href="https://greatuscrossing.everydayhero.com/us/get-started" theme="outlineNegative">
            Register
          </CallToActionLink>
        </p>
        <p>
          <em>Fundraising powered by</em><br/>
          <img src="/layouts/Footer/everydayhero.png" />
         </p>
        <p>
          <a href="https://everydayhero.com/us/terms/privacy">PRIVACY POLICY</a>
          <a href="http://everydayhero.do.s3.amazonaws.com/www.greatuscrossing.com/terms_and_conditions-19d22f0c07.pdf">TERMS &amp; CONDITIONS</a>
          <a href="https://supporter.help-us.everydayhero.com/hc/en-us/sections/201814296-Great-US-Crossing">HELP</a>
        </p>
      </TextContent>
    </Container>
  </footer>
)

