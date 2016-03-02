import React from 'react'

import BigStat from '../../components/BigStat'
import CallToActionNavLink from '../../components/CallToActionNavLink'
import Container from '../../components/Container'
import Divider from '../../components/Divider'
import Grid from '../../components/Grid'
import GridItem from '../../components/Grid/Item'
import Hero from '../../components/Hero'
import Logo from '../../components/Logo'
import Main from '../../layouts/Main'
import NavLink from '../../components/NavLink'
import Section from '../../components/Section'
import Step from '../../components/Steps/Step'
import Steps from '../../components/Steps'
import PrizeCategory from '../../components/PrizeCategory'
import TourTracker from '../../components/TourTracker'
import TextContent from '../../components/TextContent'

import styles from './styles.css'
import route from '../../components/TourTracker/route.js'
const parsedRoute = JSON.parse(route)

const placeHolderCharities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
  <GridItem key={ i } divisions={['one-half', 'tablet-one-third', 'desktop-one-quarter']}>
    <div className={ styles.charityPlaceHolder } />
  </GridItem>
))

export default () => (
  <Main title="The Great US Crossing">
    <Hero background={ <div className={ styles.heroBackground }></div> }>
      <Container type='inner-two-thirds'>
        <Logo variant="negative" />
      </Container>
      <h2>
        Virtually Ride Across The Country For Charity
      </h2>
      <h3>
        Ride because you care. Ride because you can.<br />
        Ride to make a difference.
      </h3>
      <CallToActionNavLink to="/#register" theme="outlineNegative">
        Register
      </CallToActionNavLink>
    </Hero>

    <nav role="navigation" className={ styles.PageNav }>
      <Container>
        <Grid spacing="none">
          <GridItem divisions={['one-quarter']}>
            <NavLink to="/#about" className={ styles.PageNav__NavLink }>
              <img className={ styles.PageNav__NavImage } src="/Routes/Home/greatuscrossing_bike.png" />
              About
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to="/#route" className={ styles.PageNav__NavLink }>
              <img className={ styles.PageNav__NavImage } src="/Routes/Home/greatuscrossing_pin.png" />
              Route
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to="/#prizes" className={ styles.PageNav__NavLink }>
              <img className={ styles.PageNav__NavImage } src="/Routes/Home/greatuscrossing_trophy.png" />
              Prizes
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to="/#fundraising" className={ styles.PageNav__NavLink }>
              <img className={ styles.PageNav__NavImage } src="/Routes/Home/greatuscrossing_hands.png" />
              Fundrasing
            </NavLink>
          </GridItem>
        </Grid>
      </Container>
    </nav>

    <Section id="about">
      <TextContent theme="alignCenter">
        <h2>About</h2>
        <p>This spring, join the country's most passionate and dedicated cyclists in an epic challenge to (virtually) ride across the country, collectively covering thousands of miles in teams of up to five members to raise funds and awareness for charity.</p>
        <p>Wherever you live, wherever you ride, whatever your pace, or fitness level see how far you can cross.</p>
        <p>Ride for clean water. Ride for equal access to education. Ride to find a cure. Ride for refugees. Ride for the arts, for animals, for access to bikes.   Whatever your cause, ride to make a difference.  </p>
        <p>Join us.</p>
      </TextContent>
    </Section>

    <Divider />

    <Section id="steps">
      <Steps>
        <Grid>
          <GridItem divisions={['tablet-one-third']}>
            <Step image="/Routes/Home/step-1.1.png">
              <TextContent>
                <h4>Register</h4>
                <p>Take the challenge to ride all the miles you can this May and see how far your team can go. Choose your cause and set yourself a goal. </p>
              </TextContent>
            </Step>
          </GridItem>
          <GridItem divisions={['tablet-one-third']}>
            <Step image="/Routes/Home/step-2.2.png">
              <TextContent>
                <h4>Connect</h4>
                <p>Use Strava or MapMyFitness to log miles. As you track your miles your team will progress across the country, working together to reach key milestones and collecting rewards along the way.   </p>
              </TextContent>
            </Step>
          </GridItem>
          <GridItem divisions={['tablet-one-third']}>
            <Step image="/Routes/Home/step-3.png">
              <TextContent>
                <h4>Start fundraising</h4>
                <p>Share your page and your journey with friends and family, and ask for their support.  Raise funds to make a difference.</p>
              </TextContent>
            </Step>
          </GridItem>
        </Grid>
        <TextContent>
          <p>Questions before you begin? Find your answers <a href="">here</a>.</p>
        </TextContent>
      </Steps>
    </Section>

    <Section
      id="route"
      background={ <TourTracker route={ parsedRoute } /> }>

      <div className={ styles.floatingBox }>
        <div className={ styles.contentBox }>
          <TextContent>
            <h2>The Course</h2>
            <p>The Great US Crossing course starts in San Francisco and stretches over 3000 virtual miles, passing through 13 states finishing in New York City.  As your team logs miles from rides in your own neighborhoods, the virtual course map on this website will dynamically update to move you closer to your goal.</p>
          </TextContent>
        </div>

        <Grid spacing="none">
          <GridItem divisions={['one-half']}>
            <div className={ styles.locationTile } style={{
              backgroundImage: 'url(/Routes/Home/location-san-francisco.jpg)',
            }}>
              <TextContent>
                <h3>Start</h3>
                <h4>Golden Gate Bridge</h4>
              </TextContent>
            </div>
          </GridItem>
          <GridItem divisions={['one-half']}>
            <div className={ styles.locationTile } style={{
              backgroundImage: 'url(/Routes/Home/location-new-york.jpg)',
            }}>
              <TextContent>
                <h3>Finish</h3>
                <h4>New York City</h4>
              </TextContent>
            </div>
          </GridItem>
        </Grid>

        <div className={ styles.contentBox }>
          <TextContent>
            <h3>How far will your team ride?</h3>
            <Grid spacing="none">
              <GridItem divisions={['full', 'tablet-one-third']}>
                <BigStat
                  number="31"
                  label="Days"
                />
              </GridItem>
              <GridItem divisions={['full', 'tablet-one-third']}>
                <BigStat
                  number="300"
                  label="Teams"
                />
              </GridItem>
              <GridItem divisions={['full', 'tablet-one-third']}>
                <BigStat
                  number="3,000"
                  label="Miles"
                />
              </GridItem>
            </Grid>
            <p>
              Thousands of cyclists virtually crossing the country for charity
            </p>
          </TextContent>
        </div>
      </div>
    </Section>

    <Section id="prizes">
      <TextContent theme="alignCenter">
        <h2>Prizes</h2>
        <p>Pedal past notable landmarks, hit key milestones, compete in physical and fundraising challenges, and win awesome prizes and sweet gear along the way.</p>
        <Grid>
          <GridItem divisions={['full', 'tablet-one-third']}>
            <PrizeCategory image="/Routes/Home/first-to-finish.png">
              <TextContent>
                <h4>First</h4>
                <p>Team to cross the finish line</p>
              </TextContent>
            </PrizeCategory>
          </GridItem>
          <GridItem divisions={['full', 'tablet-one-third']}>
            <PrizeCategory image="/Routes/Home/highest-funds-raised.png">
              <TextContent>
                <h4>Highest</h4>
                <p>Fundraiser</p>
              </TextContent>
            </PrizeCategory>
          </GridItem>
          <GridItem divisions={['full', 'tablet-one-third']}>
            <PrizeCategory image="/Routes/Home/greatest-elevation-gained.png">
              <TextContent>
                <h4>Greatest</h4>
                <p>Elevation gained</p>
              </TextContent>
            </PrizeCategory>
          </GridItem>
        </Grid>
      </TextContent>
    </Section>

    <Section id="fundraising" theme="faceted">
      <TextContent>
        <h2>Charities</h2>
        <p>It's all about fundraising for your favorite cause. Choose from one of ten featured charities or choose the cause that's closest to your heart.</p>
        <Grid spacing="tight">
          { placeHolderCharities }
        </Grid>
      </TextContent>
    </Section>
  </Main>
)
