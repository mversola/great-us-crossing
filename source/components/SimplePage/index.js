import React from 'react'

import Main from '../../layouts/Main'
import styles from './styles.css'

export default ({ title, body }) => (
  <Main title={ title }>
    <section className={ styles.base }>
      <div dangerouslySetInnerHTML={{
        __html: body
      }} />
    </section>
  </Main>
)
