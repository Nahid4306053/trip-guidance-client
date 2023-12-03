import React from "react";
import CountUp from "react-countup";


export default function OurCountDown({customcss}) {
  
  return (
    <div className="bg-sky-500"> 
      <div  className="rounded-lg container font-Montserrat mx-auto">
      <div className="   rounded-lg relative   text-white py-20   w-full">
      <div  className="relative px-14 z-10 grid-cols-1 grid md:grid-cols-2 gap-8 lg:grid-cols-4" > <div className="coundonw_item  text-center"> <CountUp className="text-8xl" start={0} suffix="+" duration={10} end={22} enableScrollSpy={true} triggerOnce={true} /> <p className="  mt-3">Professional Tour Guides</p> </div> <div className="coundonw_item  text-center"> <CountUp className="text-8xl" start={0} suffix="k+" duration={10} end={84} enableScrollSpy={true} triggerOnce={true} /> <p className="  mt-3">Tours are Completed</p> </div> <div className="coundonw_item  text-center"> <CountUp className="text-8xl" start={0} suffix="+" duration={10} end={35} enableScrollSpy={true} triggerOnce={true} /> <p className="  mt-3">Traveling Experience</p> </div> <div className="coundonw_item  text-center"> <CountUp className="text-8xl" start={0} suffix="+" duration={10} end={88} enableScrollSpy={true} triggerOnce={true} /> <p className="  mt-3">Happy Customers</p> </div> </div>
   
      </div >
     
    </div></div>
   
  );
}
