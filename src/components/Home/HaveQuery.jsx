import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HaveQuery() {
  return (
    <div className='bg-emerald-900 min-h-[500px] py-14 flex items-center text-center'>
     <div className='container mx-auto'>
     <div className='space-y-5'>
     <h1 className='text-2xl  text-yellow-500'>Have any Question?</h1>               
     <h1 className='text-5xl text-white '>Get In touch With US</h1>             
    </div>
    <div className="mt-10 space-x-5 md:space-x-10 text-yellow-500" >
   <Link to="/contact"> <button className='btn bg-yellow-500    hover:bg-sky-950 border-none   btn-lg md:translate-x-[10%]  md:pr-20 rounded-none text-white clipshaper'>Contact us</button></Link>
    <button className='btn clipshapel  hover:bg-yellow-500 bg-sky-950  border-none text-white md:-translate-x-[20%]   btn-lg rounded-none text-blue-90 md:pl-14'>Mail us</button>
   </div>              
     </div>          
    </div>
  )
}
