import React from 'react'
import { FaRegMap } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'

export default function Header({data}) {
  return (
    <div className=''>
     <div className='flex items-center gap-5 mb-5 justify-between'>
      <h1 className='text-3xl font-bold'>{data.title}</h1>
      <div className='price'>
       <p className='text-3xl font-bold text-sky-400'>${data.price}</p>             
       <p className='opacity-60'>Per Person</p>             
      </div>
     </div> 
     <div className="card-actions gap-5 items-center mb-5 ">
          <div className="day flex items-center gap-2"><GoClock className='text-sky-500' /> {data.day} Days</div>
          <div className="destination flex items-center gap-2">
          <FaRegMap className='text-sky-500' /> {data.destination.place}
          </div>
        </div>              
    </div>
  )
}
