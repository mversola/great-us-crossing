import React from 'react'
import { connect } from 'react-redux'

import store from '../../store'
import fetchPage from '../../store/actions/fetchPage'

import SimplePage from '../../components/SimplePage'
import FourOhFour from '../../components/FourOhFour'

const isFetched = ({ status }) =>
  status === 'fetched'

const isFailed = ({ status }) =>
  status === 'failed'

export const fetchContent = (nextState, replace, callback) => {
  const route = (nextState.params.splat || '').replace(/\/$/, '') || '/'
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (isFetched(state.pages[route])) {
      callback()
      unsubscribe()
    } else if (isFailed(state.pages[route])) {
      console.error(state.pages[route])
      unsubscribe()
    }
  })
  fetchPage(route)
}

export default connect(
  ({ pages }) => ({ pages })
)(({ pages, params }) => {
  const page = pages[params.splat || '/'] || {}
  const { content } = page

  if (!content) {
    return <FourOhFour />
  }

  const { title, body } = content

  return <SimplePage title ={ title } body={ body } />
})

