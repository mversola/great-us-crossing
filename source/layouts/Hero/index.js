import React from 'react'
import Logo from '../../components/Logo'
import NavLink from '../../components/NavLink'
import Grid from '../../components/Grid'
import GridItem from '../../components/Grid/Item'
import CallToActionLink from '../../components/CallToActionLink'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import styles from './styles.css'

const renderLogos = (partnerLogo) => {
  if (!partnerLogo) {
    return (
      <Container type='inner-one-half'>
        <Logo variant='negative' />
      </Container>
    )
  }

  return (
    <Container type='inner-two-thirds'>
      <Grid spacing='tight'>
        <GridItem divisions={['one-third']}>
          <div className={styles.partnerLogo}>
            <img src={partnerLogo} className={styles.partnerLogo__content}/>
          </div>
        </GridItem>
        <NavLink to='/'>
          <GridItem divisions={['two-thirds']}>
            <Logo variant='negative' />
          </GridItem>
        </NavLink>
      </Grid>
    </Container>
  )
}

export default ({
  text = { headline: '' },
  call_to_action = { text: 'Register', href: '' },
  partner_logo = ''
}) => (
  <header role='banner' className={styles.base}>
    <div className={styles.background}>
      <video className={styles.video} autoPlay autoStart loop muted>
        <source src='https://s3.amazonaws.com/everydayhero.do/greatuscrossing.com/Routes/Home/video/video-7bbfcf9ae0.mp4' type='video/mp4' />
        <source src='https://s3.amazonaws.com/everydayhero.do/greatuscrossing.com/Routes/Home/video/video-75edb53dbc.ogv' type='video/ogg' />
        <source src='https://s3.amazonaws.com/everydayhero.do/greatuscrossing.com/Routes/Home/video/video-4d999bfca4.webm' type='video/webm' />
      </video>
    </div>
    <Container>
      <div className={styles.content}>
        {renderLogos(partner_logo)}
        <TextContent>
          <h1 className={styles.headline}>{text.headline}</h1>
          <CallToActionLink href={call_to_action.href} theme='outlineNegative'>
            {call_to_action.text}
          </CallToActionLink>
        </TextContent>
      </div>
    </Container>
  </header>
)
