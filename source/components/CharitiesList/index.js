import React from 'react'
import Grid from '../../components/Grid'
import CharityCard from './CharityCard'

const charities = [
  {
    image: '/components/CharitiesList/images/msaa.png',
    href: 'https://greatuscrossing.everydayhero.com/us/multiple-sclerosis-association-of-america-inc/get-started'
  },
  {
    image: '/components/CharitiesList/images/tfk.jpg',
    href: 'https://greatuscrossing.everydayhero.com/us/trips-for-kids/get-started'
  },
  {
    image: '/components/CharitiesList/images/wwsn.png',
    href: ' https://greatuscrossing.everydayhero.com/us/wounded-warrior-support-network/get-started'
  },
  {
    image: '/components/CharitiesList/images/yourcause.png',
    href: 'https://greatuscrossing.everydayhero.com/us/multiple-sclerosis-association-of-america-inc/get-started'
  }
]

const charityElems = charities.map((charity, i) => (
  <CharityCard key={ i } image={ charity.image } href={ charity.href } />
))

export default () => (
  <Grid spacing="tight">
    { charityElems }
  </Grid>
)
