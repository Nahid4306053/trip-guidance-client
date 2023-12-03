import React from 'react'
import useTourType from '../../../Hooks/useTourType'
import { Link } from 'react-router-dom'

export default function TourTypeCard({data}) {
                
  return (
    <div className='Cards bg-white p-10 rounded-sm bg-opacity-70'>
      <img className='h-24' src={data.icon} alt="" />
      <h1 className='tour_type text-xl mt-5 font-semibold cursor-pointer hover:text-blue-900'>
      <Link to={`/packages?tour_type=${data.tour_type}`}> {data.tour_type} </Link>
            
      </h1>
      <p className='mt-1'>{data.title}. {data.slogan}</p>
    </div>
  )
}
