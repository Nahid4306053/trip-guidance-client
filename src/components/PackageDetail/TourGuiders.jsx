import React from 'react'
import useTourGuidersData from '../../Hooks/useTourGuideDatas'
import SmallLoading from '../shared/SmallLoading'
import SmallError from '../shared/SmallError'
import ToureGideCard from '../shared/ToureGideCard'

export default function TourGuiders() {
  const {TourGuidersData,error,isError,isLoading,isSuccess} = useTourGuidersData()
  return (
  isLoading ? <div className='w-full mt-40 flex justify-center'><SmallLoading/></div> : 
  isError ? <div className='w-full mt-40 flex justify-center'><SmallError></SmallError></div>
  :
  <div className="grid mt-14 md:grid-cols-2 gap-10 grid-cols-1 ">
  {TourGuidersData.data.users.length > 0 && 
  TourGuidersData.data.users.slice(0,4).map(ele=>{
    return <ToureGideCard data={ele} key={ele._id}></ToureGideCard>              
  })
  
  }                  
  </div>
  )
}
