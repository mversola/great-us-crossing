import React from 'react'
import { connect } from 'react-redux'
import Main from '../../layouts/Main'
import styles from './styles.css'

export default connect(
  ({ pages }) => ({ pages })
)(({ pages, params }) => {
  const { content } = pages[params.path]
  const { title, body } = content

  return (
    <Main title={ title }>
      <section className={ styles.SimplePage }>
        <div dangerouslySetInnerHTML={{
          __html: body
        }} />
      </section>
    </Main>
  )
})

