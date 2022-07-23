import React from 'react'

import { BeerCard } from '../beer-card'
import styles from './beer-list.module.scss'

export const BeerList = React.memo(({ beers }) => {
  return (
    <div className={styles.beerCardsList}>
      {beers.map((beer) => (
        <BeerCard {...beer} key={beer.id} />
      ))}
    </div>
  )
})
