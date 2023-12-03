import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'

export default function useGuiderDetails(id) {
          
  const axios = useAxiosSecureV1();
    const fetchGuiderDetails = async () => {
     const res = await axios.get(`/user/guider-details/${id}`);
      return res;
     };
    const { data: GuiderDetails, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["GuiderDetails"],
       queryFn: () => fetchGuiderDetails(),
     });   

  return {GuiderDetails, isLoading, isError, error , isSuccess}
}
