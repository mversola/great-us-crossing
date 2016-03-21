import React from 'react'
import NavLink from '../../../components/NavLink'
import GridItem from '../../../components/Grid/Item'
import styles from './styles.css'

export default ({ image, link }) => (
  <GridItem divisions={['one-half', 'medium-one-quarter']}>
    <NavLink to={link}>
      <div className={styles.base}>
        <img className={styles.image} src={image} />
      </div>
    </NavLink>
  </GridItem>
)

