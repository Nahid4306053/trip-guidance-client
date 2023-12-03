import React from "react";

export default function ContactBanner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/9bqvkQf/1486481542-gettyimages-172174540.jpg)",
      }}
      className="newslleter min-h-[600px] flex items-center"
    >
      <div className="container relative   z-10 mx-auto my-20">
        <div className={` text-center  `}>
          <div className="icon text-white text-9xl">
            <i className="fa-solid fa-burger-soda"></i>
          </div>
          <h3 className="subtile text-red-500 mt-10  md:text-xl font-semibold">
            Love where you're going
          </h3>
          <h1 className="title mx-auto   md:leading-[80px] leading-[60px] mt-5 text-5xl md:text-6xl text-white font-extrabold max-w-5xl">
            {" "}
            TripGuidance{" "}
            <span className="font-thin font-Nunito italic text-yellow-400">
              {" "}
              is a World Leading Online Tour{" "}
            </span>{" "}
            Booking Platform
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
