import React from "react";

import useTourguiderRiview from "../../Hooks/useTourGuideReview";
import SmallLoading from "../shared/SmallLoading";
import SmallError from "../shared/SmallError";
import RiviewCard from "./RiviewCard";

export default function TourGuiderRiview({ id }) {
  const { TourguiderRiview, error, isError, isLoading, isSuccess } =
    useTourguiderRiview(id);

  return isLoading ? (
    <div className="w-full flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
      TourguiderRiview.data?.length > 0 ? 
      <div className="reviews space-y-5 mt-5">
       {TourguiderRiview.data.map((ele)=>{
         return  <RiviewCard data={ele}></RiviewCard>    
       })}
      </div>
      :<div className="mt-5">No data found</div>
  );
}
