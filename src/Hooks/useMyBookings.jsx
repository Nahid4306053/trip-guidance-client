import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from './useAxiosSecureV1';
import { useAuth } from '../Context/AuthnicationContext';

export default function useMyBookings(page,limit) {
  const {CurrentUser} = useAuth()                  
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosSecureV1();
    const fetchMyBookings = async () => {
     const res = await axios.get(`/package/my-bookings?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
     const { data: MyBookings, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["MyBookings", page,limit],
       queryFn: () => fetchMyBookings(),
     });  

  return {MyBookings, isLoading, isError, error , isSuccess}
}
