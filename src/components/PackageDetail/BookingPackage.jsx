/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "../../Context/AuthnicationContext";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import useTourGuidersData from "../../Hooks/useTourGuideDatas";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useMood } from "../../Context/TemplateMoodContext";


export default function BookingPackage({ data }) {
  const { CurrentUser } = useAuth();
  const navigate = useNavigate();
  const AxiosSecureV1 = useAxiosSecureV1();
  const [showCongratute,setCongratute] = useState(false)
  const { TourGuidersData, isSuccess, error, isError } = useTourGuidersData();
  const { width, height } = useWindowSize()
  const formref = useRef();
  const { Darkmood } = useMood()
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await AxiosSecureV1.post(`/package/book/`, data);
      return res;
    },
    
    onSuccess: (savedata) => {
      
      formref.current.reset(); 
         Swal.fire({
        title: "Booking Successfully!",
        html: `Visit DashBoard My Booking page For Complete The Payment`,
        imageUrl: data.gallery[0],
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      if(savedata.data.totalBook > 3){
         setCongratute(true)
      }
   
      
     
    },
    onError: (err) => {
      console.log(err)
      toast.error("Failed to Booking ");
    },
  });
  useEffect(()=>{
    // window.scrollTo(0,0);
    
    if(showCongratute){
     let close ;
     const fire =  setTimeout(() => {
      Swal.fire({
        title: "Congratulation",
        html: `You Got 20% Discount. For Discount Use this Coupon #Hj923g`,
        imageUrl: "https://i.ibb.co/sQYjTqk/pngtree-peachy-party-character-with-confetti-vector-card-illustration-congratulate-icon-vector-png-i.jpg",
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: "Congratulation",
      });
     }, 1500);
     
      close  = setTimeout(()=>{
      clearTimeout(fire)
      setCongratute(false)
      return close;
     },5000)
    }
  },[showCongratute])
  const handelBooking = (form) => {
    form.preventDefault();
    if (CurrentUser) {
      let err = [];
      const tour_date = form.target.tour_date.value;
      const tour_guider = form.target.tour_guider.value;
      if (new Date(tour_date) < new Date()) {
        err.push("Please Provide latest date");
      }

      if (err.length === 0) {
        mutation.mutate({
          tour_date,
          tour_guider,
          tourist: CurrentUser._id,
          package: data._id,
        });
      } else {
        toast.error(err[0]);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="px-10 p-5 lg:p-5 bg-base-300 ">
      <h1 className="text-3xl font-bold">Book This Package</h1>
        <Confetti
        tweenDuration={5000}
        run={showCongratute}
        width={width}
        height={height}
      />  
      <form
        ref={formref}
        onSubmit={handelBooking}
        className="space-y-5 mt-10"
        action=""
      >
 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
           value={CurrentUser?.displayName || "example"}
            type="text"
            readOnly
         
            className="input rounded-sm  input-bordered"
          />
        </div>        
           <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
           value={CurrentUser?.email || "example@gmail.com"}
            type="text"
            readOnly
                className="input rounded-sm  input-bordered"
          />
        </div>        
           <div className="form-control">
          <label className="label">
            <span className="label-text">Package Price</span>
          </label>
          <input
           value={data.price}
            type="text"
            readOnly
            className="input rounded-sm  input-bordered"
          />
        </div> 


        <div className="form-control">
          <label className="label">
            <span className="label-text">Select a tour Date</span>
          </label>
          <input
            type="date"
            name="tour_date"
            className="input rounded-sm  input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Tour Guider</span>
          </label>
          <select
            required
            name="tour_guider"
            className="select  select-bordered w-full "
          >
            <option value="">Select a Tour Guider</option>
            {isSuccess &&
              TourGuidersData.data.users.map((ele) => {
                return (
                  <option key={ele._id} value={ele._id}>
                    {ele.displayName}
                  </option>
                );
              })}
          </select>
        </div>
        <button
          disabled={CurrentUser && CurrentUser?.role !== "user"}
          className="btn w-full bg-blue-900 hover:bg-blue-900 mt-14 text-white px-14"
        >
          Book Now
        </button>
        {CurrentUser && CurrentUser?.role !== "user" && (
          <p className="text-blue-900 font-bold opacity-70">
            Note: Only Tourist Can Book
          </p>
        )}
      </form>
    </div>
  );
}
