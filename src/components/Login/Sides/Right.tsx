import React from 'react'
import kio from "../../../assets/Login/kio.jpg";
type Props = {}

const Right = (props: Props) => {
  return (
    <section className='w-full h-full md:flex-[0.5] hidden md:flex '>
                            <img src={kio} className='h-[100%] w-[100%] rounded-r-lg' alt="" />
                        </section>
  )
}

export default Right 