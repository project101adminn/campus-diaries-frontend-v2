import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import {products} from '../../common/productlist'
type Props = {}

const MarketPlaceM = (props: Props) => {

    





  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={`${product.id}`} className="group">
                <Card product={product}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default MarketPlaceM


