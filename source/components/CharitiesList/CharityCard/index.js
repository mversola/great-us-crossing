import React from 'react'
import GridItem from '../../../components/Grid/Item'
import styles from './styles.css'

export default ({ image, href }) => (
  <GridItem divisions={['one-half', 'medium-one-quarter']}>
    <a href={ href }>
      <div className={ styles.base }>
        <img className={ styles.image } src={image} />
      </div>
    </a>
  </GridItem>
)

