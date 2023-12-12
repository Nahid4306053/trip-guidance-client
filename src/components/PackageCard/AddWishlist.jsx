import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useAuth } from '../../Context/AuthnicationContext';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecureV1 from '../../Hooks/useAxiosSecureV1';
import { toast } from 'react-toastify';
import useCheackWishlist from '../../Hooks/CheackWishList';
import { FaHeart } from "react-icons/fa6";
export default function AddWishlist({id}) {
  const {CurrentUser} = useAuth();
  const {WishlistData,error,isSuccess,isLoading} = useCheackWishlist(id)
  const AxiosSecureV1 = useAxiosSecureV1()
  const queryclient = useQueryClient();
  const navigate = useNavigate();
  const mutation2 = useMutation({
    mutationFn : async (data)=>{
      const res = await  AxiosSecureV1.post('/wishlist',data);
      return res;
    },
    onSuccess : ()=>{
     toast.success("Add to wishlist SuccessFully")
     queryclient.invalidateQueries(`CheackWishlist${id}`)
    },
    onError : ()=>{
      toast.error("Add to wishlist Failed")
    },

  })
  
  const addtowishlist = (e) =>{
   e.preventDefault()
   if(!CurrentUser){
    navigate("/login")
   }
   else{
    if(CurrentUser.role === 'user'){
         mutation2.mutate({package:id})
    }
    else{
      toast.warning("Only Tourist can add to Wishlist")
    }
 
   }
   
  }
  return (
    CurrentUser ?  isSuccess && WishlistData.data ? 
    <div  className='absolute cursor-pointer   z-10 p-2 top-3 right-3 rounded-xl bg-base-300 '>
    <Link to="/dashboard/my-wishlist"><FaHeart   className='text-secondary'/> </Link>
    </div>
    :
    <div onClick={addtowishlist} className='absolute cursor-pointer group  z-10 p-2 top-3 right-3 rounded-xl bg-base-300 '>
    <FaRegHeart  className='group-hover:text-secondary'/> 
    </div>
    :
    <div onClick={addtowishlist} className='absolute cursor-pointer group  z-10 p-2 top-3 right-3 rounded-xl bg-base-300 '>
    <FaRegHeart  className='group-hover:text-secondary'/> 
    </div>
  )
}
