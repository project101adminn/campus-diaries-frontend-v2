import { Link } from 'react-router-dom';

import React from 'react'

type Props = {
  ImgSrc: any,
  ImgAlt: any,
  name: any,
  route:any,
}

function ResourceCard({ ImgSrc, ImgAlt, name , route }: Props) {
  return (
    <Link
      to={route}
      className="transform  overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <div className='flex flex-col justify-center items-center'>
        <img
          className='w-80 h-80 p-12'
          src={ImgSrc}
          alt={ImgAlt}
        />
        <div className="p-4 text-center text-black/[0.9]">
          <h2 className="text-2xl font-semibold -mt-12">{name}</h2>

        </div>
      </div>
    </Link>
  )
}

export default ResourceCard