import React from 'react'
import Button from './Button'
import Profile from './Other/Profile'

type Props = {}

function Dashboard({}: Props) {
  return (
    <div className='w-screen h-[92vh] flex bg-gray-100'>
        <div className=' flex-[0.2]'>
            
            <div className='h-[100%] flex flex-col'>
                <p>
                    Main
                </p>
                <Button text="Profile"/>
                <Button text="Studies"/>
                <Button text="Settings"/>
            </div>
        </div>
        <div className='bg-blue-500 flex-grow'>
            <Profile/>
        </div>
    </div>
  )
}

export default Dashboard