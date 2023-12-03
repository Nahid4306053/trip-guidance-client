import React from 'react'
import useTourGuidersData from '../Hooks/useTourGuideDatas'
import SmallLoading from '../components/shared/SmallLoading'
import SmallError from '../components/shared/SmallError'
import ToureGideCard from '../components/shared/ToureGideCard'
import PageBanner from '../components/shared/PageBanner'
import { Link } from 'react-router-dom'
import ScrollTop from '../Hooks/ScrollTop'

export default function TourGuiders() {
  ScrollTop()
  const {
   
  TourGuidersData,error,isError,isLoading,isSuccess} = useTourGuidersData()
  return (
  <> 
  <PageBanner
   title="Our Tour Guiders"
    bgimg="https://i.ibb.co/yfpvzWf/visiting-a-monument-with-friends-qualities-of-a-good-tour-guide-1.png"
      >
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-500" to="/">
            Home
          </Link>
          / Tour Guiders
        </div>
   </PageBanner>
   <div className="container mx-auto mb-20">
     {isLoading ? <div className='w-full mt-20 flex justify-center'><SmallLoading/></div> : 
    isError ? <div className='w-full mt-20 flex justify-center'><SmallError></SmallError></div>
    :
    <div className="grid mt-14 lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 ">
    {TourGuidersData.data.users.length > 0 && 
    TourGuidersData.data.users.map(ele=>{
      return <ToureGideCard data={ele} key={ele._id}></ToureGideCard>              
    })
    
    }                  
  </div>}
   </div>
  </>
  )
}
