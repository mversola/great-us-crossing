import React from 'react'
import { Provider } from 'react-redux'
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'mocha-jsdom'

import { configureStore } from '../../../store'
import FeatureCharity from '../'

chai.use(chaiEnzyme())

const createPage = (slug, title = '', body = '') => ({
  charities: {
    [slug]: {
      content: {
        about: { title, body }
      }
    }
  }
})

const setUp = (initialState = { charities: {} }, props = { params: { slug: '' } }) => {
  const store = configureStore(initialState)
  const component = (
    <Provider store={store}>
      <FeatureCharity { ...props } />
    </Provider>
  )
  const wrapper = mount(component)
  return {
    component,
    wrapper,
    title: wrapper.find('#about').find('h2'),
    content: wrapper.find({
      dangerouslySetInnerHTML: {}
    })
  }
}

describe('FeatureCharity', () => {
  jsdom()

  describe('state.charities[props.params.slug].content', () => {
    context('is present', () => {
      it('renders the about.title attribute within the #about h2 element', () => {
        const state = createPage('dogs', 'DOGS!')
        const props = {
          params: { slug: 'dogs' }
        }
        const { title } = setUp(state, props)
        expect(title).to.contain.text('DOGS!')
      })

      it('renders the about.body attribute within the #about element', () => {
        const state = createPage('dogs', '', 'Are great')
        const props = {
          params: { slug: 'dogs' }
        }
        const { content } = setUp(state, props)
        expect(content).to.contain.text('Are great')
      })
    })
  })
})
