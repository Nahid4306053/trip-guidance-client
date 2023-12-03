import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublicV1 from './useAxiosPublicV1';

export default function usePackages(id) {                  
  const axios = useAxiosPublicV1();
    const fetchPackages = async () => {
     const res = await axios.get(`/package/singel/${id}`);
      return res;
     };
    const { data: Package, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["package" , id],
       queryFn: () => fetchPackages(),
     });  

  return {Package, isLoading, isError, error , isSuccess}
}
