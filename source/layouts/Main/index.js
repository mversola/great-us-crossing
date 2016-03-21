import React from 'react'
import DocumentTitle from 'react-document-title'

import Header from '../Header'
import Footer from '../Footer'

export default ({
  title = '',
  children
}) => (
  <DocumentTitle title={title}>
    <article>
      <Header />
      {children}
      <Footer />
    </article>
  </DocumentTitle>
)

