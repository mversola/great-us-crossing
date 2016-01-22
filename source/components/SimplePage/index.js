import React from 'react'
import { connect } from 'react-redux'
import Main from '../../layouts/Main'
import styles from './styles.css'

export default connect(
  ({ pages }) => ({ pages })
)(({ pages, params }) => {
  const page = pages[params.path] || {}
  const { content } = page

  if (!content) {
    return (
      <Main title="404">
        <section className={ styles.SimplePage }>
          <div>Whoops!</div>
        </section>
      </Main>
    )
  }

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

