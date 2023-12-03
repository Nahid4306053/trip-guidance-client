import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from './useAxiosSecureV1'
import { useAuth } from '../Context/AuthnicationContext';

export default function useFullStory(id) {            
  const axios = useAxiosSecureV1();
    const fetchFullStory = async () => {
     const res = await axios.get(`/story/${id}`);
      return res;
     };
    const { data: FullStoryData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: [`FullStory`, id],
       queryFn: () => fetchFullStory(),
    
     });    

  return {FullStoryData, isLoading, isError, error , isSuccess}
}
