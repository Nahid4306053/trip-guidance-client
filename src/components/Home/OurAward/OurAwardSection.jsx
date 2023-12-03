import React from "react";

export default function OurAwardSection() {
  return (
    <div className="bg-sky-900 lg:h-[450px] py-20 lg:mb-40">
      <div className={` text-center  font-Nunito space-y-3 md:space-y-3`}>
        <h3 className="subtile text-yellow-500  md:text-xl font-semibold ">
          Know More About us
        </h3>
        <h1 className="title leading-[60px]  mx-auto  max-w-3xl text-5xl text-white font-extrabold ">
          TripGuidance Award Winning Top Rated Tour Operator
        </h1>
      </div>
      <div className="container mx-auto mt-20 lg:mt-0">
        <div className="grid grid-cols-1 font-Nunito lg:translate-y-1/4 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="Card py-10 px-14 hover:text-white hover:bg-blue-900 transition-all group  bg-white text-center">
            <div className="ic group-hover:text-white  text-sky-900 text-7xl mb-4">
              <i className="fa-thin fa-hat-cowboy-side"></i>
            </div>
            <h2 className="text-title text-2xl font-bold ">
              8000+ Our Local Guides
            </h2>
          </div>
          <div className="Card py-10 px-14 hover:text-white hover:bg-blue-900 transition-all group  bg-white text-center">
            <div className="icon group-hover:text-white  text-sky-900 text-7xl mb-4">
              <i className="fa-thin fa-thumbs-up"></i>
            </div>
            <h2 className="text-title text-2xl font-bold ">
              100% Trusted Tour Agency
            </h2>
          </div>
          <div className="Card py-10 px-14 hover:text-white hover:bg-blue-900 transition-all group  bg-white text-center">
            <div className="icon group-hover:text-white  text-sky-900 text-7xl mb-4">
              <i className="fa-thin fa-barcode-read"></i>
            </div>
            <h2 className="text-title text-2xl font-bold ">
              28+ Years of Travel Experience
            </h2>
          </div>
          <div className="Card py-10 px-14 hover:text-white hover:bg-blue-900 transition-all group  bg-white text-center">
            <div className="icon group-hover:text-white  text-sky-900 text-7xl mb-4">
              <i className="fa-thin fa-face-smile"></i>
            </div>
            <h2 className="text-title text-2xl font-bold ">
              98% Our Travelers are Happy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
