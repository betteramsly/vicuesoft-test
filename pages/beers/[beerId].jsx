import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import BeerDetails from '../../components/beer-details/beer-details'

const BeerPage = () => {
  const router = useRouter()
  const [beerData, setBeerData] = React.useState(null)
  const beerId = router.query.beerId

  React.useEffect(() => {
    if (beerId) {
      axios
        .get(`https://api.punkapi.com/v2/beers/${beerId}`)
        .then((res) => setBeerData(res.data[0]))
    }
  }, [beerId])

  return (
    <>
      <BeerDetails {...beerData} />
    </>
  )
}

export default BeerPage
