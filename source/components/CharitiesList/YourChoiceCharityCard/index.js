import React from 'react'
import GridItem from '../../../components/Grid/Item'
import styles from '../CharityCard/styles.css'

const props = {
  image: '/components/CharitiesList/images/yourcause.png',
  link: 'https://greatuscrossing.everydayhero.com/us/multiple-sclerosis-association-of-america-inc/get-started'
}

export default () => (
  <GridItem divisions={['one-half', 'medium-one-quarter']}>
    <a href={props.link}>
      <div className={styles.base}>
        <img className={styles.image} src={props.image} />
      </div>
    </a>
  </GridItem>
)

