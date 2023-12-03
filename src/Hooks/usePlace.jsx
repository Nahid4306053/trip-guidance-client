import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axios from 'axios';

export default function usePlace() {

    const fetchPlace = async () => {
     const res = await axios.get("/data/place.json");
      return res;
      };

    const { data: Place, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["Place"],
       queryFn: () => fetchPlace(),
     });  

  return {Place, isLoading, isError, error , isSuccess}
}
