import React from 'react'

export default function Newsletter() {
  return (
    <div style={{backgroundImage:'url(https://i.ibb.co/zNbdbqJ/Best-Banff-Hikes.jpg)'}} className='newslleter min-h-[400px] flex items-center'>
     <div className='container relative   z-10 mx-auto my-20'>
     <div className={` text-center  font-Nunito space-y-3 md:space-y-0`}>
       <h3 className='subtile text-yellow-500  md:text-xl font-semibold'>Get our Exiting Offers</h3>             
      <h1 className='title  md:leading-[80px] text-5xl text-white font-extrabold '>Subscribe Our NewsLetter</h1>
       <div>              
         <div className='NewsLetter_form flex justify-center mt-7 text-lg'>
          <input type="text" className='focus:outline-none p-3 w-full max-w-xs placeholder:' placeholder='Type your email ' />
          <button className='bg-yellow-500 px-7 text-white'>Subscribe </button>
         </div> 
       </div>
    </div>      
     </div>
    </div>
  )
}
