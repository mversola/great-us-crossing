import React from 'react'

import Section from '../../components/Section'
import TextContent from '../../components/TextContent'
import Grid from '../../components/Grid'
import GridItem from '../../components/Grid/Item'
import PrizeCategory from '../../components/PrizeCategory'

export default () => (
  <Section id='prizes'>
    <TextContent theme='alignCenter'>
      <h2>Win awesome prizes</h2>
      <p>Pedal past notable landmarks, hit key milestones, compete in physical and fundraising challenges, and win awesome prizes and sweet gear along the way.</p>
    </TextContent>
    <Grid>
      <GridItem divisions={['full', 'medium-one-third']}>
        <PrizeCategory image='/Routes/Home/images/first-to-finish.png'>
          <TextContent theme='alignCenter'>
            <h4>First</h4>
            <p>Team to cross the finish line</p>
          </TextContent>
        </PrizeCategory>
      </GridItem>
      <GridItem divisions={['full', 'medium-one-third']}>
        <PrizeCategory image='/Routes/Home/images/highest-funds-raised.png'>
          <TextContent theme='alignCenter'>
            <h4>Highest</h4>
            <p>Team and Individual Fundraiser</p>
          </TextContent>
        </PrizeCategory>
      </GridItem>
      <GridItem divisions={['full', 'medium-one-third']}>
        <PrizeCategory image='/Routes/Home/images/greatest-elevation-gained.png'>
          <TextContent theme='alignCenter'>
            <h4>Greatest</h4>
            <p>Elevation gained</p>
          </TextContent>
        </PrizeCategory>
      </GridItem>
    </Grid>
  </Section>
)
