import React from "react";
import useStorys from "../Hooks/useStorys";
import StroyCard from "../components/Home/Storys/StroyCard";

import { Link } from "react-router-dom";
import PageBanner from "../components/shared/PageBanner";
import SmallError from "../components/shared/SmallError";
import SmallLoading from "../components/shared/SmallLoading";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";

export default function Community() {
  const { Storys, isError, isLoading, isSuccess } = useStorys(1, 10);
 ScrollTop()
  return (
    <><Pagetitle>Community || TourGuidance</Pagetitle>
      <PageBanner
        title="Our Community Journey storys"
        bgimg="https://i.ibb.co/5rLCv37/15986049-matterhorn-views.webp"
      >
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-500" to="/">
            Home
          </Link>{" "}
          / community{" "}
        </div>
      </PageBanner>
      <div className="container mx-auto mt-5  my-20">
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
          </>
        )}
      </div>
    </>
  );
}
