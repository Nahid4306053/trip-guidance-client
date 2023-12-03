import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from './useAxiosSecureV1';
import { useAuth } from '../Context/AuthnicationContext';

export default function useMyWishList(page,limit) {
  const {CurrentUser} = useAuth()                  
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosSecureV1();
    const fetchMyWishList = async () => {
     const res = await axios.get(`/wishlist/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
     const { data: MyWishList, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["MyWishList", page,limit],
       queryFn: () => fetchMyWishList(),
     });  

  return {MyWishList, isLoading, isError, error , isSuccess}
}
