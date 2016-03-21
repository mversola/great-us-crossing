import React from 'react'
import Grid from '../../components/Grid'
import CharityCard from './CharityCard'
import YourChoiceCharityCard from './YourChoiceCharityCard'

const renderCharities = (charities) => (
  charities.map((charity, i) => (
    <CharityCard key={i} image={charity.image} link={charity.link} />
  )).concat(
    <YourChoiceCharityCard key={charities.length} />
  )
)

export default ({ charities }) => (
  <Grid spacing='tight'>
    {renderCharities(charities)}
  </Grid>
)
