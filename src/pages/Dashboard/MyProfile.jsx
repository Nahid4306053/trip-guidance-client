import React from 'react'
import { useAuth } from '../../Context/AuthnicationContext'
import AdditionalInfoForm from '../../components/Dashboard/MyProfile/AdditionalInfoForm'
import StoryAddForm from '../../components/Story/StoryAddForm'
import AdminStattistics from '../../components/Dashboard/MyProfile/AdminStattistics'

export default function MyProfile() {
  const {CurrentUser}  = useAuth()
  const role = CurrentUser.role                
  return (
    <div className=''>
     <div className="">
      <div style={{background:"url(https://i.ibb.co/f2TD789/wp2089896.jpg)",backgroundPosition:"center"}}  className="h-48">
          <img className=' translate-y-1/2 h-full w-48 mx-auto object-cover bg-white p-1  rounded-full' src={CurrentUser.photoURL} alt="" />
        </div> 
         <div className="deatils  text-center  mt-16 p-10">
           <h3 className='name text-2xl font-bold'>{CurrentUser.displayName} <span className={`badge capitalize ${CurrentUser.role === "admin" ?  "badge-secondary font-bold" :   CurrentUser.role === "tour guider" ? "badge-accent text-white" : "" }`}>{CurrentUser.role}</span></h3> 
           <h4>{CurrentUser.email}</h4>         
        </div>  
         <div className="additionalInfo px-10">
             {role === 'tour guider' &&
             <AdditionalInfoForm ></AdditionalInfoForm>
             }
             {role === 'user' &&
             <StoryAddForm></StoryAddForm>
             } 
             {role === 'admin' &&
             <AdminStattistics></AdminStattistics>
             }         
         </div>                        
      </div>                 
    </div>
  )
}
