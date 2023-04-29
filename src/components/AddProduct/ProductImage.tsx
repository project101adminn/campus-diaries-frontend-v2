import React from 'react'
import kio from "../../assets/Login/kio.jpg";
type Props = {}

function ProductImage({}: Props) {
  return (
    <div className='flex bg-gray-100 p-2 justify-between m-2'>
        <div className='flex space-x-2 items-center'>
        <img src={kio} className="h-20 w-20 rounded-md" alt="" />
        </div>
        <div className='font-bold text-red-500'>
            X
        </div>
    </div>
  )
}

export default ProductImage