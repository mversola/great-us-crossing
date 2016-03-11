import React from 'react'
import { RouteHandler } from 'react-router'
import DocumentTitle from 'react-document-title'
import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.css'

export default (props) => (
  <DocumentTitle title={ props.title }>
    <article className={ styles.Main }>
      { props.children }
      <Footer { ...props } />
    </article>
  </DocumentTitle>
)

