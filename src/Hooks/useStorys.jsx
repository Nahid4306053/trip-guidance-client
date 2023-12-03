import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useStorys(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchStorys = async () => {
     const res = await axios.get(`/story/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: Storys, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["Storys", page,limit],
       queryFn: () => fetchStorys(),
     });  

  return {Storys, isLoading, isError, error , isSuccess}
}
