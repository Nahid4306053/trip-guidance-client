import React from 'react'
import PageBanner from '../components/shared/PageBanner'
import { Link, useParams } from 'react-router-dom'
import useFullStory from '../Hooks/UseFullStory'
import SmallLoading from '../components/shared/SmallLoading';
import SmallError from '../components/shared/SmallError';
import moment from 'moment';

export default function Fullstory() {
  const {id} = useParams();
  const {FullStoryData,error,isError,isLoading,isSuccess} = useFullStory(id)
  const {createdAt,description,title,writer} = FullStoryData?.data || {}
  
  return (
    <>
      <PageBanner
        title="Full Story"
        bgimg="https://i.ibb.co/5rLCv37/15986049-matterhorn-views.webp"
      >
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-500" to="/">
            Home
          </Link>
          / Full Story
        </div>
      </PageBanner>
       <div className='my-20 container mx-auto'>
        <div className="grid gap-16 grid-cols-12">
          <div className="content_part col-span-12 lg:col-span-8">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
          <div className='details'>
           <h1 className='text-4xl leading-[40px] font-semibold text-blue-900 font-Nunito'>{title}</h1>
           <div className='writer flex gap-5 mt-5 items-center'>
              <div className="avatar h-20 w-20 object-cover  rounded-lg overflow-hidden">
                   <img src={writer?.photoURL} alt="" />
              </div>
              <div className='details '>
                <h3 className='text-2xl font-Nunito font-semibold '>{writer?.displayName}</h3>
                <p className='mt-1 md:text-base text-xs'>{moment(createdAt).format('MMMM Do , YYYY')}</p>
               
              </div> 
           </div>
           <h3 className='full Journey mt-16 text-3xl font-medium'>Full Journey Story</h3>
           <p className='mt-3 leading-8 text-lg'>{description}</p>
          </div>)}
          </div>
          <div className='sidebar col-span-12 lg:col-span-4 '>

          </div>  
        </div>
       </div>
    </>
  )
}

