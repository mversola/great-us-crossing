import React from 'react'
import { connect } from 'react-redux'
import Main from '../../layouts/Main'
import styles from './styles.css'

export default connect(
  ({ pages }) => ({
    content: (pages['/about'] || {}).content
  })
)(({ content = {}}) => {
  const { title, body } = content

  return (
    <Main title={ title }>
      <section className={ styles.About }>
        <div dangerouslySetInnerHTML={{
          __html: body
        }} />
        <p><img src="/pages/About/john-abbott.jpg" /></p>
      </section>
    </Main>
  )
})
