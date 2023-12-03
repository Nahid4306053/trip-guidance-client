import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'

export default function useTourguiderRiview(id) {
              
  const axios = useAxiosSecureV1();
    const fetchTourguiderRiview = async () => {
     const res = await axios.get(`/review/tour-guider/${id}`);
      return res;
     };
    const { data: TourguiderRiview, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["TourguiderRiview", id],
       queryFn: () => fetchTourguiderRiview(),
     });    

  return {TourguiderRiview, isLoading, isError, error , isSuccess}
}
