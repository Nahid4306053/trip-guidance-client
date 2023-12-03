import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import OurPackages from "./OurPackages";
import OurTourGuider from "./OurTourGuider";
import OverView from "./OverView";

export default function Tabsection() {
  const [tab, seTab] = useState(1);
  return (
    <div className="container mx-auto my-10 md:my-28">
      <SectionTitle
        title="Tourism and Travel Guide"
        subtitle="Explore Packaeges, Discover Experiences"
      ></SectionTitle>
      <div className="tab-items border-b-2 border-opacity-70  mt-14 flex text-white gap-2 md:gap-5">
        <div
          onClick={() => seTab(1)}
          className={`items ${
            tab === 1 ? "bg-yellow-500" : " bg-blue-900 "
          } bg-opacity-70 cursor-pointer p-1 px-2 md:px-5 text-sm md:py-3 md:text-xl font-semibold "`}
        >
          Overview
        </div>
        <div
          onClick={() => seTab(2)}
          className={`items ${
            tab === 2 ? "bg-yellow-500" : " bg-blue-900 "
          } bg-opacity-70 cursor-pointer p-1 px-2 md:px-5 text-sm md:py-3 md:text-xl font-semibold "`}
        >
          Our Packages
        </div>
        <div
          onClick={() => seTab(3)}
          className={`items ${
            tab === 3 ? "bg-yellow-500" : " bg-blue-900 "
          }  bg-opacity-70 cursor-pointer  p-1 px-2 md:px-5 text-sm md:py-3 md:text-xl font-semibold `}
        >
          Our Tour Guides
        </div>
      </div>
      <div className="main-section mt-5">
        {tab === 1 && <OverView></OverView>}
        {tab === 2 && <OurPackages></OurPackages>}
        {tab === 3 && <OurTourGuider></OurTourGuider>}
      </div>
    </div>
  );
}
