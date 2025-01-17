import React from 'react'
import Cards from '../Components/Cards'

export default function Layout() {
  return (
    <div className='w-full md:py-0'>
        <div className='text-center space-y-4'>
        <h1 className='text-[2rem] text-purple-600 font-medium'>Top Cars</h1>
        <div className='w-[13rem] h-1 bg-purple-600 m-auto'></div>   
        </div>
       <Cards/>
    </div>
  )
}
