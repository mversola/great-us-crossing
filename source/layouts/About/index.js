import React from 'react'

import Section from '../../components/Section'
import CallToActionLink from '../../components/CallToActionLink'
import TextContent from '../../components/TextContent'

export default ({
  title,
  body,
  call_to_action = {}
}) => (
  <Section id='about'>
    <TextContent theme='alignCenter'>
      {title ? <h2>{title}</h2> : null}
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <p>
        <CallToActionLink href={call_to_action.href}>
          {call_to_action.text}
        </CallToActionLink>
      </p>
    </TextContent>
  </Section>
)
