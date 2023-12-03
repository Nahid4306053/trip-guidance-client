import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useTourType() {
  const axios = useAxiosPublicV1();
    const fetchtripTypes = async () => {
     const res = await axios.get("/tour-types");
      return res;
      };

    const { data: tourTypes, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["tourTypes"],
       queryFn: () => fetchtripTypes(),
     });  

  return {tourTypes, isLoading, isError, error , isSuccess}
}
