import React from "react";
import { Link } from "react-router-dom";
import useStorys from "../../../Hooks/useStorys";
import SectionTitle from "../../shared/SectionTitle";
import SmallError from "../../shared/SmallError";
import SmallLoading from "../../shared/SmallLoading";
import StroyCard from "./StroyCard";

export default function StorySection() {
  const { Storys, isError, isLoading, isSuccess } = useStorys(1, 4);

  return (
    <div className="container mx-auto mt-14  my-20">
      <SectionTitle
        subtitle="Explore the unique experiences of Journey"
        title="Our Tourist Journey Story"
      ></SectionTitle>
      {isLoading ? (
        <div className="w-full mt-14 flex justify-center">
          <SmallLoading />
        </div>
      ) : isError ? (
        <div className="w-full mt-14 flex justify-center">
          <SmallError></SmallError>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 mt-16 md:grid-cols-1 gap-14 lg:grid-cols-2 ">
            {Storys.data.Storys.map((ele) => {
              return <StroyCard key={ele._id} data={ele}></StroyCard>;
            })}
          </div>
          <div className="flex justify-end mt-14 ">
            <Link to="/community">
              <button className="btn  bg-yellow-500 hover:bg-yellow-500 text-white">
                {" "}
                View All Story{" "}
                <i className="fa-regular fa-circle-arrow-right "></i>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
