import React from 'react'
import { connect } from 'react-redux'

import store from '../../store'
import fetchCharity from '../../store/actions/fetchCharity'

import featuredCharities from '../../content/featured-charities.json'
import FeatureCharityLayout from '../../layouts/FeatureCharity'

const fundraising = {
  charities: featuredCharities
}

const isFetched = ({ status }) => status === 'fetched'
const isFailed = ({ status }) => status === 'failed'

export const fetchCharityContent = ({ params }, replace, callback) => {
  const { slug } = params

  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (isFetched(state.charities[slug])) {
      callback()
      unsubscribe()
    } else if (isFailed(state.charities[slug])) {
      replace('404')
      unsubscribe()
    }
  })
  fetchCharity(slug)
}

export default connect(
  ({ charities }) => ({ charities })
)(({ charities, params: { slug } }) => {
  const charity = charities[slug] || {}
  const {
    content: {
      hero,
      about
    }
  } = charity

  return (
    <FeatureCharityLayout
      slug={slug}
      hero={hero}
      about={about}
      fundraising={fundraising}
    />
  )
})
