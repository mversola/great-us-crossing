import React from 'react'

import Grid from '../../components/Grid'
import BigStat from '../../components/BigStat'
import TourTracker from '../../components/TourTracker'
import GridItem from '../../components/Grid/Item'
import Section from '../../components/Section'
import TextContent from '../../components/TextContent'

import styles from './styles.css'
import route from '../../components/TourTracker/route.js'
const parsedRoute = JSON.parse(route)

export default () => (
  <Section
    id='route'
    background={<TourTracker route={parsedRoute} />}>

    <div className={styles.floatingBox}>
      <div className={styles.contentBox}>
        <TextContent>
          <h2>The Course</h2>
          <p>The Great US Crossing course starts in San Francisco and stretches nearly 3000 virtual miles, passing through 13 states finishing in New York City. As your team logs miles from rides in your own neighborhoods, the tour tracker and course map on this website will dynamically update to move you closer to your goal.</p>
        </TextContent>
      </div>

      <Grid spacing='none'>
        <GridItem divisions={['one-half']}>
          <div className={styles.locationTile} style={{
            backgroundImage: 'url(/layouts/Route/location-san-francisco.jpg)'
          }}>
            <TextContent>
              <h4>Start</h4>
              <h4>Golden Gate Bridge</h4>
            </TextContent>
          </div>
        </GridItem>
        <GridItem divisions={['one-half']}>
          <div className={styles.locationTile} style={{
            backgroundImage: 'url(/layouts/Route/location-new-york.jpg)'
          }}>
            <TextContent>
              <h4>Finish</h4>
              <h4>New York City</h4>
            </TextContent>
          </div>
        </GridItem>
      </Grid>

      <div className={styles.contentBox}>
        <TextContent>
          <h3>How far will your team ride?</h3>
          <Grid spacing='tight'>
            <GridItem divisions={['one-third']}>
              <BigStat
                number='31'
                label='Days'
              />
            </GridItem>
            <GridItem divisions={['one-third']}>
              <BigStat
                number='300'
                label='Teams'
              />
            </GridItem>
            <GridItem divisions={['one-third']}>
              <BigStat
                number='3,000'
                label='Miles'
              />
            </GridItem>
          </Grid>
        </TextContent>
      </div>
    </div>
  </Section>
)
