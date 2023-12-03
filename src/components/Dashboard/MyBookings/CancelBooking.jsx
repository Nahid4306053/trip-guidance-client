import React from "react";
import { MdFreeCancellation } from "react-icons/md";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function CancelBooking({id}) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient()
 
 const mutation = useMutation({
     mutationFn : async ()=>{
        const res = await  AxiosSecureV1.delete(`/package/booking/${id}`);
        return res             
     },
     onSuccess : ()=>{
      Swal.fire({
        title: "Cnacel SuccessFully!",
        text: "Booking Cnacel SuccessFully!",
        icon: "success"
      });
        QueryClient.invalidateQueries('MyWishList')           
     },
     onError : (errr)=>{
      console.log(errr)
        toast.error("Booking Cnacel Failed!")             
     }            
 })                  
 const handelDelete = () =>{
  
   Swal.fire({
    title: "Are you sure?",
    text: "You want to cancel Booking",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Cancel Booking!"
  }).then((result) => {
     if (result.isConfirmed) {
       mutation.mutate()  
    }
  });                 
 }  
  return (
    <button
      onClick={handelDelete}
      data-tip="Cancel Booking"
      className="btn tooltip text-red-600 btn-ghost btn-xs text-lg  "
    >
      <MdFreeCancellation />
    </button>
  );
}
