import React from 'react'

import Section from '../../components/Section'
import TextContent from '../../components/TextContent'
import CharitiesList from '../../components/CharitiesList'

export default ({ charities }) => (
  <Section id='fundraising' theme='faceted'>
    <TextContent>
      <h2>Featured Charities</h2>
      <p>It's all about fundraising for your favorite cause. Choose from one of ten featured charities or choose the cause that's closest to your heart.</p>
      <CharitiesList charities={charities} />
    </TextContent>
  </Section>
)
