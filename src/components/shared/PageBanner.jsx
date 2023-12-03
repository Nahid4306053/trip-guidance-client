import React from 'react'
import '../../Styles/PageBanner.scss'
export default function PageBanner({bgimg,title,children}) {
  return (
    <div style={{background:`url(${bgimg})`}} className='relative mt-32 lg:mt-[150px] h-96 pagebanner'> 
     <div className="pagebanneroverly">
      </div>
      <div className='relative h-full w-full flex items-center justify-center z-10'>
        <div className='text-center'>
        <h1 className='text-5xl ita font-bold text-white px-10 text-center'>{title}</h1> 
        {children} 
        </div>          
      </div>              
    </div>
  )
}
