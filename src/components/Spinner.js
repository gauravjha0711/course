import React from 'react'
import "./Spinner.css";
export default function() {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'></div>
        <p className='text-blue-800 text-lg font-semibold'>Loading...</p>
    </div>
  )
}
