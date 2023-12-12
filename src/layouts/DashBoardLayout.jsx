import React, { useRef } from 'react'
import Header from '../components/Dashboard/Header'
import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useMood } from '../Context/TemplateMoodContext'

export default function DashBoardLayout() {
   const contineref = useRef();
   const scrollto = () =>{
      contineref.current.scrollTop = 0;
   }
   const {Darkmood} = useMood()
  return (

    <div className={`h-screen flex justify-center items-center w-screen ${Darkmood ? "bg-blue-950" : "bg-blue-100"}  shadow-2xl shadow-black`}>
    <div>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false}  newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

     </div>
     <div className='container mx-aut'>
      <div className='h-[600px] md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden bg-base-50 '>
       <div className="header w-full h-[15%] md:h-[10%] bg-white shadow-lg">
          <Header></Header>          
       </div>             
         <div className='mainpart flex h-[85%] md:h-[90%]'>
        <div className={`sidebar text-center lg:text-start overflow-y-auto  w-[80px] lg:w-2/6 xl:w-1/5 ${Darkmood ? "bg-slate-950" : "bg-blue-100"}  bg-blue-900`}>
           <Sidebar></Sidebar>   
        </div>
        <div ref={contineref} className={`custom-scrollbar contentpart overflow-y-auto w-full lg:w-4/6 xl:w-4/5 h-full bg-opacity-50  ${Darkmood ? "bg-slate-950" : "bg-blue-200"} `}>
            <Outlet scrollto={scrollto}></Outlet>        
         </div>             
      </div>
      </div>              
      
     </div> 
    </div>
  )
}
