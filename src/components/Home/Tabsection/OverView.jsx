// import React from 'react'
// import SectionTitle from '../../shared/SectionTitle'

import { useMood } from "../../../Context/TemplateMoodContext";

export default function OverView() {
  const { Darkmood } = useMood();
  return (
    <div className='flex  flex-col lg:flex-row gap-20 mt-10'>
     <div className='flex-1 relative'>
     <div className=" space-y-4">
        <h3 className='subtile text-yellow-500 text-lg font-semibold'>TRUSTED & PROFESSIONAL</h3>             
     <h1 style={{lineHeight:"60px"}} className={`title   text-5xl  max-w-md ${Darkmood ? "text-white" : "text-sky-900"} font-bold`}>We’re Trusted by More Than <span className='italic text-sky-500 font-medium'>84,106</span> Clients</h1>
     <div className='w-full '>
       <img className='h-80 object-right mt-14 w-1/2 object-cover' src="https://i.ibb.co/9bqvkQf/1486481542-gettyimages-172174540.jpg" alt="" />
      </div>
      <div className='p-10 bg-red-500 bottom-0 md:w-96 absolute right-0 text-xl font-bold text-white'>We only chosse the best one for you</div>

     </div>
    </div>              
       <div className='flex-1 relative'>
         <img className='h-full w-full object-cover' src="https://i.ibb.co/WkDzJS4/sporty-zimowe-dla-dzieci-snowboard-122105-1-X.jpg" alt="" />   
         <div className='over h-full w-full absolute top-0 bg-black bg-opacity-10'>

         </div>        
        </div>              
    </div>
  )
}
