import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from './useAxiosSecureV1';
import { useAuth } from '../Context/AuthnicationContext';

export default function useCheckBooking(id) {
  const {CurrentUser} = useAuth()                  
               
  const axios = useAxiosSecureV1();
    const fetchBookingData = async () => {
     const res = await axios.get(`/package/booking/${id}`);
      return res;
     };
     const { data: BookingData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["BookingData",id],
       queryFn: () => fetchBookingData(),
       enabled : id ? true : false,
     });  

  return {BookingData, isLoading, isError, error , isSuccess}
}
