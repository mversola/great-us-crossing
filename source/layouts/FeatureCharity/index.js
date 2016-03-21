import React from 'react'

import About from '../About'
import PageNav from '../PageNav'
import Prizes from '../Prizes'
import Route from '../Route'
import Hero from '../Hero'
import Fundraising from '../Fundraising'
import Main from '../Main'

export default ({
  title = '',
  slug = '',
  hero = {},
  about = {},
  fundraising = {}
}) => (
  <Main title=''>
    <Hero {...hero}/>
    <PageNav currentPage={`/featured-charities/${slug}`}/>
    <About {...about}/>
    <Route />
    <Prizes />
    <Fundraising {...fundraising} />
  </Main>
)
