import React from 'react'

import Section from '../../components/Section'
import TextContent from '../../components/TextContent'
import Steps from '../../components/Steps'
import Step from '../../components/Steps/Step'
import Grid from '../../components/Grid'
import GridItem from '../../components/Grid/Item'

export default () => (
  <Section id='steps' theme='grey'>
    <Steps>
      <Grid>
        <GridItem divisions={['regular-one-third']}>
          <Step image='/Routes/Home/images/step-blue-1.jpg' icon='register'>
            <TextContent>
              <h4>Register</h4>
              <p>Take the challenge to ride all the miles you can this May and see how far your team can go. Choose your cause and set yourself a goal. </p>
            </TextContent>
          </Step>
        </GridItem>
        <GridItem divisions={['regular-one-third']}>
          <Step image='/Routes/Home/images/step-blue-2.jpg' icon='strava-and-mmf'>
            <TextContent>
              <h4>Connect</h4>
              <p>Use <strong><a href='https://supporter.help-us.everydayhero.com/hc/en-us/articles/207813846-How-Do-I-Use-Strava-To-Log-My-Miles-for-The-Great-US-Crossing-'>Strava</a></strong> or <strong><a href='https://supporter.help-us.everydayhero.com/hc/en-us/articles/207813886-How-Do-I-Use-MapMyFitness-to-Log-My-Miles-in-the-Great-US-Crossing-'>MapMyFitness</a></strong> to log miles. As you track your miles, your team will progress across the country, working together to reach key milestones and collecting rewards along the way.</p>
            </TextContent>
          </Step>
        </GridItem>
        <GridItem divisions={['regular-one-third']}>
          <Step image='/Routes/Home/images/step-blue-3.jpg' icon='bike'>
            <TextContent>
              <h4>Start fundraising</h4>
              <p>Share your page and your journey with friends and family, and ask for their support.  Raise funds to make a difference.</p>
            </TextContent>
          </Step>
        </GridItem>
      </Grid>
      <TextContent>
        <p>Questions before you begin? Find your answers <a href=' https://supporter.help-us.everydayhero.com/hc/en-us/sections/201814296-Great-US-Crossing'>here</a>.</p>
      </TextContent>
    </Steps>
  </Section>
)

