import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'
import { useAuth } from '../Context/AuthnicationContext';

export default function useCheackWishlist(id) {
  const {CurrentUser} = useAuth()             
  const axios = useAxiosSecureV1();
    const fetchCheackWishlist = async () => {
     const res = await axios.get(`/wishlist/singel/${id}`);
      return res;
     };
    const { data: WishlistData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: [`CheackWishlist${id}`, id],
       queryFn: () => fetchCheackWishlist(),
       enabled : id && CurrentUser ? true : false
     });    

  return {WishlistData, isLoading, isError, error , isSuccess}
}
