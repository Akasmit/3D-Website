import React from 'react'
import {Html } from '@react-three/drei'

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
        <Html>
        <div className='w-20 h-20 borfer-2 border-opacity-20 
        border-blue-500 border-t-blue-500 rounded-full animate-spin' />
        </Html>
    </div>
  )
}

export default Loader