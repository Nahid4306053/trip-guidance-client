import React from "react";
import { Link } from "react-router-dom";
import useTourGuidersData from "../../../Hooks/useTourGuideDatas";
import SmallError from "../../shared/SmallError";
import SmallLoading from "../../shared/SmallLoading";
import ToureGideCard from "../../shared/ToureGideCard";

export default function OurTourGuider() {
  const { TourGuidersData, error, isError, isLoading, isSuccess } =
    useTourGuidersData();
  return isLoading ? (
    <div className="w-full mt-40 flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full mt-40 flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
    <>
      <div className="grid mt-14 md:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1 ">
        {TourGuidersData.data.users.length > 0 &&
          TourGuidersData.data.users.slice(0, 6).map((ele) => {
            return <ToureGideCard data={ele} key={ele._id}></ToureGideCard>;
          })}
      </div>
      <div className="flex justify-end">
        <Link to="/tour-guiders">
          <button className="btn bg-blue-900  hover:bg-blue-900  mt-14  text-white">
            View All Tour Guides
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
