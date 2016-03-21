import React from 'react'

import About from '../About'
import PageNav from '../PageNav'
import Prizes from '../Prizes'
import Steps from '../Steps'
import Route from '../Route'
import Hero from '../Hero'
import Fundraising from '../Fundraising'
import Main from '../Main'

export default ({
  title = '',
  hero = {},
  about = {},
  fundraising = {}
}) => (
  <Main title=''>
    <Hero {...hero}/>
    <PageNav/>
    <About {...about}/>
    <Steps />
    <Route />
    <Prizes />
    <Fundraising {...fundraising} />
  </Main>
)
