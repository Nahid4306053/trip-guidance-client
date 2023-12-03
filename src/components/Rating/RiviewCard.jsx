import React from 'react'
import Rating from 'react-rating'

export default function RiviewCard({data}) {
  const {createdAt,rating,reviewer,review} = data       
              
  return (
   <div className='reviewcard flex items-center gap-4  bg-opacity-75 rounded-lg bg-blue-100 max-w-3xl p-5'>
     <div className="w-24">
        <img className='md:w-24 md:h-24  h-16 w-16 object-cover rounded-full ' src={reviewer?.photoURL} alt="" />
     </div> 
     <div className="w-9/12 break-words ">
      <h3 className='text-xl'>{reviewer?.displayName}</h3>
      <div  className='text-lg text-yellow-500 '>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        initialRating={rating}
        readonly
      />
      </div>
       <p className='mt-3 opacity-75 leading-7'>{review}</p>
     </div>
   </div>
  )
}
