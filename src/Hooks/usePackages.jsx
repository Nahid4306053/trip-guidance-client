import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublicV1 from './useAxiosPublicV1';

export default function usePackages(page,limit,tour_type) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchPackages = async () => {
     const res = await axios.get(`/package/all?page=${Tpage}&limit=${Tlimit}${tour_type ? "&tour_type="+tour_type : ""}`);
      return res;
     };
    const { data: Packages, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["packages", page,limit , tour_type ? tour_type : ""],
       queryFn: () => fetchPackages(),
     });  

  return {Packages, isLoading, isError, error , isSuccess}
}
