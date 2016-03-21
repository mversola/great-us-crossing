import React from 'react'

import HomeLayout from '../../layouts/Home'

import heroContent from '../../content/hero.json'
import aboutContent from '../../content/about.md'
import featuredCharities from '../../content/featured-charities.json'

const about = {
  title: aboutContent.data.title,
  body: aboutContent.content,
  call_to_action: aboutContent.data.call_to_action
}

const fundraising = {
  charities: featuredCharities
}

export default () => (
  <HomeLayout
    hero={heroContent}
    about={about}
    fundraising={fundraising}
  />
)
