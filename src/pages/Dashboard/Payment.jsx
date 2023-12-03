import React, { useEffect, useRef, useState } from 'react'
import useCheckBooking from '../../Hooks/useCheckBooking'
import { useParams } from 'react-router-dom'
import SmallError from '../../components/shared/SmallError'
import SmallLoading from '../../components/shared/SmallLoading'
import { Divider } from '@mui/material'
import { toast } from 'react-toastify'
import PaymentCardForm from '../../components/Payment/PaymentCardForm'

export default function Payment() {
 const [userCoupon,setUserCoupon] = useState(); 
 const [appliedCoupon,setappliedCoupon] = useState(); 
 const [discount,setDiscount] = useState(0);
 const [totalPay,setTotalPay] = useState() 
 const inputref = useRef()
 const {id} = useParams() 
 const {BookingData,error,isLoading,isSuccess,isError} = useCheckBooking(id) 
 const current_date = new Date();
 const Coupon = '#Hj923g';
 useEffect(()=>{
  if(isSuccess){
    console.log(BookingData.data.totalbooking,Coupon)
   if(BookingData.data.Booking.package.price){
      setTotalPay(BookingData.data.Booking.package.price)
   } 
   if(BookingData.data.totalbooking > 3){
    setUserCoupon(Coupon)
   } 
   else{
    setUserCoupon('')
   }
  }
 },[isSuccess]);

 const handelDiscount = () =>{
  if(appliedCoupon){
    const price = BookingData.data.Booking?.package?.price; 
    setDiscount(0);
    setTotalPay(price)
    setappliedCoupon();
  }
  else{
    if(BookingData.data.totalbooking > 3){
      const price = BookingData.data.Booking?.package?.price; 
      const discountAmount = parseFloat((price * 20) / 100);
      setDiscount(discountAmount);
      setTotalPay(parseFloat(price - discountAmount))
      setappliedCoupon(Coupon);
   }
   else{
     toast.error('Your Are Not Eligable To use This Coupon')
   }
  }
 }
  return (
    <div className='p-5'>
      <div className='flex items-center flex-col justify-center'><h1 className="p-5 text-white px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          Payment
      </h1>
       <div className='mt-10'>
       {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            BookingData.data.Booking ?  
            <div className='max-w-lg p-2 mb-10'>
              <div className='packagedetails'>
                <img  src={BookingData.data.Booking?.package?.gallery[0]} alt="" />
                 <h2 className='packName mt-4 text-lg flex justify-between'><strong>Package: </strong>{BookingData.data.Booking?.package?.title}</h2> 
                 <h2 className='packName mt-2 text-lg flex justify-between'><strong>Price: </strong> ${BookingData.data.Booking?.package?.price}</h2>
                 { new Date(BookingData.data.Booking.tour_date) > current_date ? 
                  <div >
                  <Divider sx={{my:2}} />  
                  <h2 className='packName mt-2 text-lg flex justify-between'><strong>Your Coupon: </strong>{userCoupon ? userCoupon : "Not Available"}</h2>
                  <h2 className='packName mt-3 text-lg flex justify-between'><strong>Applied Coupon: </strong>{appliedCoupon ? userCoupon : "Not Available"}</h2>
                  <div className='CouponForm flex space-x-3 items-center mt-5 '>
                  
                 <div className='flex w-full justify-end'> 
                 <button onClick={handelDiscount} disabled={!userCoupon} className='btn btn-warning text-white'>{appliedCoupon ? "Remove" : "Apply"} Coupon</button>
                 </div>
                  </div> 

                  <Divider sx={{my:3}} /> 
                  <h2 className='packName mt-3 text-lg flex justify-between'><strong>Discount: </strong>${discount}</h2> 
                  <h2 className='packName mt-3 text-lg flex justify-between'><strong>Total Pay: </strong>${totalPay}</h2> 
                  <PaymentCardForm totalpay={totalPay} booking_id={BookingData.data.Booking._id} package_id={BookingData.data.Booking?.package?._id}></PaymentCardForm>
                  
                  </div>
                   :<h2 className='text-red-500 text-lg mt-2'>The tour Date is Over</h2>
                 } 
              </div>
            </div>
            : 
            <h1 className='text-2xl text-center text-red-500'>Invalid Booking Id</h1>
            )
          }
       </div>
      </div>
    </div>
  )
}
