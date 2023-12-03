import React from "react";
import log_bg from "/images/login_bg.jpg";
import logo from "/images/logo.png";

export default function EntrypointDesc() {
  return (
    <div style={{ backgroundImage: `url(${log_bg})`, backgroundPosition: "center", backgroundSize: "cover", }} className="hidden md:block md:col-span-3 lg:col-span-3 relative min-h-[700px] h-full  text-white " >
      <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
      <div className="relative p-10 z-10 flex items-end h-full  text-title">
        <div className="space-y-10">
          <h1 className="text-3xl">
            Embark on Unforgettable Journeys with TripGuidance - Where Every
            Adventure Begins
          </h1>
          <p className="leading-8 text-lg">
            Welcome to TripGuidance, your gateway to unparalleled adventures and
            exploration. At TripGuidance, we believe that every journey is a
            story waiting to be told, and we're here to guide you through the
            chapters of extraordinary experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
