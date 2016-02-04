import { expect } from 'chai'

import pages from '../'

describe('pages reducer: (pages, action)', () => {
  context('provided action.FETCH_PAGE', () => {
    it('returns the state with [action.route] set to { status: \'fetching\' }', () => {
      expect(pages({}, { type: 'FETCH_PAGE', route: 'a-page' })).to.eql({ 'a-page': { status: 'fetching' } })
    })
  })

  context('provided action.RECEIVE_PAGE_FAILURE', () => {
    it('returns the state with [action.route] set to { status: \'failed\' }', () => {
      expect(pages({}, { type: 'RECEIVE_PAGE_FAILURE', route: 'a-page' })).to.eql({ 'a-page': { status: 'failed', error: '' } })
    })
  })

  context('provided action.RECEIVE_PAGE_SUCCESS', () => {
    it('returns the state with [action.route] set to { status: \'fetched\' }', () => {
      expect(pages({}, { type: 'RECEIVE_PAGE_SUCCESS', route: 'a-page' })).to.eql({ 'a-page': { status: 'fetched', content: '' } })
    })
  })
})
