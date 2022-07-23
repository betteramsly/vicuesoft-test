import { useRouter } from 'next/router'
import React from 'react'

import { axiosInstance } from '../../shared/api'
import { BeerList } from '../beer-list'
import { PaginationBlock } from '../pagination-block'
import styles from './main-page-landing.module.scss'

export function MainPageLanding() {
  const [beerName, setBeerName] = React.useState('')
  const [beersCount, setBeersCount] = React.useState(0)
  const [beers, setBeers] = React.useState([])

  const router = useRouter()
  const page = Number(router.query.page || 1)

  const PER_PAGE = 6
  const pagesCount = Math.floor(beersCount / PER_PAGE)

  React.useEffect(() => {
    fetchBeers()
  }, [page])

  React.useEffect(() => {
    getBeersCount()
  }, [])

  const getBeersCount = async () => {
    const { data } = await axiosInstance.get('beers')
    setBeersCount(data.length)
  }

  const fetchBeers = async () => {
    setBeerName('')
    const { data } = await axiosInstance.get('beers', {
      params: {
        page,
        per_page: PER_PAGE,
      },
    })
    setBeers(data)
  }

  const searchBeers = async () => {
    if (!beerName) {
      fetchBeers()
      return
    }
    const { data } = await axiosInstance.get(`beers`, {
      params: {
        beer_name: beerName,
      },
    })
    setBeers(data)
  }

  return (
    <div className={styles.container}>
      <input
        onKeyDown={(event) => {
          if (event.code === 'Enter') {
            searchBeers()
          }
        }}
        placeholder="Введите имя пива"
        className={styles.input}
        value={beerName}
        onChange={(event) => setBeerName(event.target.value)}
      />
      <BeerList beers={beers} />
      {!beerName && <PaginationBlock pagesCount={pagesCount} page={page} />}
    </div>
  )
}
