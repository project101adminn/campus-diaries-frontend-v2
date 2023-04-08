import React from 'react'
import HomeMarket from './components/MarketPlace/HomeMarketPlace/HomeMarket'
import MarketPlaceM from './components/MarketPlace/ListingItems/MarketPlaceM'

type Props = {}

const MarketPlace = (props: Props) => {
  return (
    <div>
        {/* <MarketPlaceM/> */}
        <HomeMarket/>
    </div>
  )
}

export default MarketPlace