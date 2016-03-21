import { expect } from 'chai'

import charities from '../'

describe('charities reducer: (charities, action)', () => {
  context('provided action.FETCH_CHARITY', () => {
    it("returns the state with [action.slug] set to { status: 'fetching' }", () => {
      expect(charities({}, { type: 'FETCH_CHARITY', slug: 'a-charity' })).to.eql({ 'a-charity': { status: 'fetching' } })
    })
  })

  context('provided action.RECEIVE_CHARITY_FAILURE', () => {
    it("returns the state with [action.slug] set to { status: 'failed' }", () => {
      expect(charities({}, { type: 'RECEIVE_CHARITY_FAILURE', slug: 'a-charity' })).to.eql({ 'a-charity': { status: 'failed', error: '' } })
    })
  })

  context('provided action.RECEIVE_CHARITY_SUCCESS', () => {
    it("returns the state with [action.slug] set to { status: 'fetched' }", () => {
      expect(charities({}, { type: 'RECEIVE_CHARITY_SUCCESS', slug: 'a-charity' })).to.eql({ 'a-charity': { status: 'fetched', content: '' } })
    })
  })
})
