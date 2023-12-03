import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'

export default function useTourGuidersData() {
          
  const axios = useAxiosSecureV1();
    const fetchTourGuidersData = async () => {
     const res = await axios.get(`/user/tour-guider`);
      return res;
     };
    const { data: TourGuidersData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["TourGuidersData"],
       queryFn: () => fetchTourGuidersData(),
     });   

  return {TourGuidersData, isLoading, isError, error , isSuccess}
}
