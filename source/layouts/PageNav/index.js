import React from 'react'
import Grid from '../../components/Grid'
import GridItem from '../../components/Grid/Item'
import Icon from '../../components/Icon'
import Sticky from '../../components/Sticky'
import NavLink from '../../components/NavLink'
import Container from '../../components/Container'
import styles from './styles.css'

export default ({ currentPage = '' }) => (
  <Sticky>
    <nav role='navigation' className={styles.PageNav}>
      <Container type='default'>
        <Grid spacing='none'>
          <GridItem divisions={['one-quarter']}>
            <NavLink to={`${currentPage}/#about`} className={styles.PageNav__NavLink}>
              <div className={styles.PageNav__NavLink__icon}>
                <Icon icon='bike' />
              </div>
              <span className={styles.PageNav__NavLink__text}>
                About
              </span>
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to={`${currentPage}/#route`} className={styles.PageNav__NavLink}>
              <div className={styles.PageNav__NavLink__icon}>
                <Icon icon='map' />
              </div>
              <span className={styles.PageNav__NavLink__text}>
                Route
              </span>
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to={`${currentPage}/#prizes`} className={styles.PageNav__NavLink}>
              <div className={styles.PageNav__NavLink__icon}>
                <Icon icon='prize' />
              </div>
              <span className={styles.PageNav__NavLink__text}>
                Prizes
              </span>
            </NavLink>
          </GridItem>
          <GridItem divisions={['one-quarter']}>
            <NavLink to={`${currentPage}/#fundraising`} className={styles.PageNav__NavLink}>
              <div className={styles.PageNav__NavLink__icon}>
                <Icon icon='heart' />
              </div>
              <span className={styles.PageNav__NavLink__text}>
                Fundrasing
              </span>
            </NavLink>
          </GridItem>
        </Grid>
      </Container>
    </nav>
  </Sticky>
)
