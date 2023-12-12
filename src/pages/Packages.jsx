/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PageBanner from '../components/shared/PageBanner'
import { Link, useSearchParams } from 'react-router-dom'
import usePackages from '../Hooks/usePackages'
import SmallLoading from '../components/shared/SmallLoading'
import SmallError from '../components/shared/SmallError'
import PackageCard from '../components/shared/PackageCard'
import Pagenation from '../components/shared/Pagenation'
import useTourType from '../Hooks/useTourType'
import Pagetitle from '../Hooks/Pagetitle'
import { useMood } from '../Context/TemplateMoodContext'

export default function Packages() {
  const {  isSuccess:isdataload, tourTypes } = useTourType();
  const [page,setpage]= useState(1)
  const [SearchParams,setSearchParams] = useSearchParams()  
  const [currentTourType,setCurrentTourType] = useState(SearchParams.has("tour_type") ? SearchParams.get('tour_type') : "" )                  
  const {Packages,error,isError,isLoading,isSuccess} = usePackages(page,9,currentTourType)  
  const { Darkmood } = useMood()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[page]) 

  useEffect(()=>{
  
    if(currentTourType === ""){
      setSearchParams((prev)=>{
        prev.delete("tour_type")
        return prev
      }) 
    }
    else{
      setpage(1)
      setSearchParams((prev)=>{
        prev.set("tour_type",currentTourType)
        return prev
      }) 
    }
   
  },[currentTourType])

  return (
   <>
    <div>
      <Pagetitle>Packages || TripGuidance</Pagetitle>
      <PageBanner title="Our Awesome Packages" bgimg="https://i.ibb.co/9bqvkQf/1486481542-gettyimages-172174540.jpg">
       <div className='flex justify-center  text-white gap-2 text-xl mt-5'><Link className='hover:text-yellow-500' to="/">Home</Link> / Packages </div>              
     </PageBanner>              
    </div>
    <div className='my-20'>
      <div className="mainpart">
      { isLoading ? <div className='w-full flex justify-center'><SmallLoading/></div> : 
     isError ? <div className='w-full flex justify-center'><SmallError></SmallError></div>
     :  
      <div className='container mx-auto'> 
       <div className={`header flex justify-between items-center ${Darkmood ? "bg-base-300" : "bg-blue-100"} p-5`}>
        <h2 className='totaldata text-2xl font-semibold'>Total Package found {Packages.data.totalData
        }</h2>
        <div className='flex items-center gap-5'>
        <h2 className='totaldata text-xl font-semibold whitespace-nowrap'>Filter By tour type: 
        </h2>
        <select value={currentTourType} onChange={(e)=>setCurrentTourType(e.target.value)} className="select text-base  focus:outline-none select-bordered w-full ">
          <option value="" >All</option>
          {isdataload && tourTypes.data.map((ele,ind)=>{
            return  <option key={ind} value={ele.tour_type}>{ele.tour_type}</option>
          })}
        </select>
        </div>            
        </div>      
        <div className="packeges mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> 
            {Packages.data.packages.length > 0 ? 
            Packages.data.packages.map((ele)=>{
              return <PackageCard data={ele}></PackageCard>   
            }) 
            :"No data found , this ui wiil cutomize soon "}     
       </div>
       <div className='pagention flex justify-center my-20'>
       <Pagenation
              page={page}
              setpage={setpage}
              totalData={Packages?.data?.totalData}
            ></Pagenation>
       </div>
       </div> }       
      </div>
    </div>
   </>
  )
}
