/* eslint-disable no-unused-vars */
import React from 'react'
import SectionTitle from '../../shared/SectionTitle'
import SmallLoading from '../../shared/SmallLoading'
import SmallError from '../../shared/SmallError'
import useTourType from '../../../Hooks/useTourType'
import TourTypeCard from './TourTypeCard'
import { useMood } from '../../../Context/TemplateMoodContext'

export default function TourTypesSection() {
  const {isLoading , isError , isSuccess , tourTypes , error } = useTourType() ;
  const { Darkmood } = useMood() 
  return (
    <div style={{background:"url(https://i.ibb.co/Nn33xph/Views-of-Lake-Louise-from-the-Big-Beehive-Alberta-Canada.jpg)",backgroundAttachment:"fixed"}} className="tourtypes min-h-[550px]  py-20">
      <div className='content '>
      <div className={` text-center  font-Nunito space-y-3 md:space-y-0`}>
       <h3 className='subtile text-yellow-500  md:text-xl font-semibold'>Crafting Your Ideal Travel Adventure</h3>             
      <h1 className='title  md:leading-[80px] text-5xl text-white font-extrabold '>Our Provided Tour Types</h1> 
    </div>
    {isLoading ? (
          <SmallLoading> </SmallLoading>
        ) : isError ? (
          <SmallError>Try again: {error.message}</SmallError>
        ) : (
          <>
       <div className='container mx-auto mt-10'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          tourTypes.data.map((ele)=>{
            return <TourTypeCard key={ele._id} data={ele}></TourTypeCard>
          })
        }
        </div>
       </div>
       
        </>
        )} 
      </div>
    </div>
  )
}
