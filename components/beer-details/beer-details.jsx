import React from 'react'
import styles from './beer-details.module.scss'

export default function BeerDetails({
  name,
  image_url,
  description,
  first_brewed,
}) {
  return (
    <div className={styles.beerFullCard}>
      <img className={styles.beerImg} alt="photo" src={image_url} />
      <div className={styles.beerInfo}>
        <p className={styles.beerName}>{name}</p>
        <p className={styles.beerDesc}>{description}</p>
        <p className={styles.beerBrewedDate}>{first_brewed}</p>
      </div>
    </div>
  )
}
