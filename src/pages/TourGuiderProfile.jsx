import React from 'react'
import PageBanner from '../components/shared/PageBanner'
import { Link, useParams } from 'react-router-dom'
import useGuiderDetails from '../Hooks/useGuiderDetails'
import SmallError from '../components/shared/SmallError'
import SmallLoading from '../components/shared/SmallLoading'
import { FaPhoneFlip } from 'react-icons/fa6'
import { FaAddressCard } from 'react-icons/fa'
import { HiAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaGg } from "react-icons/fa";
import { CgMonday } from "react-icons/cg";
import RatingForm from '../components/Rating/RatingForm'
import { Tour } from '@mui/icons-material'
import TourGuiderRiview from '../components/Rating/TourGuiderRiview'
import ScrollTop from '../Hooks/ScrollTop'
import Pagetitle from '../Hooks/Pagetitle'
import { useMood } from '../Context/TemplateMoodContext'


export default function TourGuiderProfile() {
  const {id} = useParams()
  ScrollTop()
  const {GuiderDetails,error,isError,isLoading,isSuccess} = useGuiderDetails(id)
  const { Darkmood } = useMood();
  return (
    <>
    <div>
      <PageBanner  bgimg="https://i.ibb.co/WkDzJS4/sporty-zimowe-dla-dzieci-snowboard-122105-1-X.jpg">
                   
     </PageBanner>
     <div className="container mx-auto">
     {isLoading ? <div className='w-full flex justify-center'><SmallLoading/></div> : 
     isError ? <div className='w-full flex justify-center'><SmallError></SmallError></div>
     : 
     <div className='profile relative mb-20'>
      <Pagetitle>Tour Guider || {GuiderDetails?.data?.displayName} || TripGuidance</Pagetitle>
      <div className='profileimg '>
        <img className={`md:h-80 w-64 lg:-mt-40 p-2 ${Darkmood ? "bg-base-100" : "bg-white"}  shadow-lg bg-blue-00 -mt-32 h-64 md:w-80 object-cover rounded-full `} src={GuiderDetails.data.photoURL} alt="" />
      </div>
      <div className="main_info  mt-10 md:space-y-1">
       <h1 className='text-3xl md:text-3xl font-bold text-sky-900'>{GuiderDetails.data.displayName}</h1>  
        <h1 className='text-2xl md:text-2xl font-bold opacity-60'>{GuiderDetails.data.email}</h1> 
      </div>

     {GuiderDetails.data.additionalInfo && 
     <div className='addtional_info mt-14 grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>

      {/* {`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`} */}
      {GuiderDetails.data.additionalInfo?.phone 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Phone</h4>
         <p className='flex gap-2 items-center'>{ GuiderDetails.data.additionalInfo?.phone}</p>
         <FaPhoneFlip className='text-[180px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}    
      
        {GuiderDetails.data.additionalInfo?.address 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Address</h4>
         <p className=' gap-2 text-center max-w-[300px]'>{ GuiderDetails.data.additionalInfo?.address}</p>
         <FaAddressCard className='text-[150px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}       
      
       {GuiderDetails.data.additionalInfo?.education 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Education</h4>
         <p className=' gap-2 text-center max-w-[300px]'>{ GuiderDetails.data.additionalInfo?.education}</p>
         <HiAcademicCap  className='text-[150px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}     
      
        {GuiderDetails.data.additionalInfo?.skill 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Skill</h4>
         <p className=' gap-2 text-center max-w-[300px]'>{ GuiderDetails.data.additionalInfo?.skill}</p>
         <FaGg   className='text-[150px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}     
      
        {GuiderDetails.data.additionalInfo?.work_experience 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Work Experience</h4>
         <p className=' gap-2 text-center max-w-[300px]'>{ GuiderDetails.data.additionalInfo?.work_experience}</p>
         <MdWork  className='text-[150px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}      
      
       {GuiderDetails.data.additionalInfo?.hobby 
      && <div className={`${Darkmood ? "bg-base-300" :"bg-blue-100"} min-h-[230px] relative flex flex-col justify-center items-center shadow-lg  rounded-lg py-10 px-5`}>
         <h4 className='text-xl font-medium mt-5 mb-2'>Hobby</h4>
         <p className=' gap-2 text-center max-w-[300px]'>{ GuiderDetails.data.additionalInfo?.hobby}</p>
         <CgMonday  className='text-[150px]  opacity-5  right-4 bottom-4   absolute text-blue-600' />
      </div>}

     </div>
     }
     <div className='text-3xl mt-24 font-bold text-blue-900'>Reviews</div>
     <TourGuiderRiview id={GuiderDetails.data._id}></TourGuiderRiview>

     <div className='text-3xl mt-24 font-bold text-blue-900'>Drop a Review</div>
     <RatingForm id={GuiderDetails.data._id}></RatingForm>
     </div>
     
     
     }


      </div>              
    </div>

    </>
  )
}
