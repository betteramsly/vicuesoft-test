import React from 'react'
import Link from 'next/link'

import styles from './beer-card.module.scss'
import { cutDescription } from '../../shared/utils'

export function BeerCard({ id, name, image_url, description, first_brewed }) {
  const MAX_DESC_LENGTH = 140
  const cutDesc = cutDescription(description, MAX_DESC_LENGTH)

  return (
    <Link href={`beers/${id}`}>
      <div className={styles.beerCard}>
        <img className={styles.beerImg} alt="Фотография пива" src={image_url} />
        <p className={styles.beerName}>{name}</p>
        <p className={styles.beerDesc}>{cutDesc}</p>
        <p className={styles.beerBrewedDate}>{first_brewed}</p>
      </div>
    </Link>
  )
}
