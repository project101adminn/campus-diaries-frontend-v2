import React from 'react'

type Props = {
    text:String
}

function Button({text}: Props) {
  return (
    <div className='bg-white p-2 m-1 rounded-lg'>
        {text}
    </div>
  )
}

export default Button