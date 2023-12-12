/* eslint-disable react/prop-types */

import PackageCardSlide from "../PackageCard/PackageCardSlide";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";
import { FaRegMap } from "react-icons/fa6";
import { useMood } from "../../Context/TemplateMoodContext";

export default function PackageCard({ data }) {
  const { Darkmood } = useMood();
  return (
    <div className={`"card rounded-sm ${Darkmood ?  "bg-base-300" : "bg-blue-100 "}  overflow-hidden shadow-xl"`}>
      <PackageCardSlide id={data._id} data={data.gallery}></PackageCardSlide>
      <div className="card-body mt-5"> 
        <h2 className="text-xl">
          <Link className="hover:text-yellow-500" to={`/singel-package/${data._id}`}>{data.title}</Link>
        </h2>
        <p><span className="text-lg text-sky-500 ">${data.price}</span><span className="text-sm ml-1 opacity-60">/ Per person</span></p>
        <div className="card-actions gap-5 items-center mt-5">
          <div className="day flex items-center gap-2"><GoClock /> {data.day} Days</div>
          <div className="destination flex items-center gap-2">
          <FaRegMap /> {data.destination.place.split('-')[1]}
          </div>
        </div>
        <div className="card-actions mt-2">
        <div className="badge badge-outline ">{data.tour_type}</div> 
       <div className="badge badge-outline ">{data.destination.place.split('-')[0]}</div>
    </div>
      </div>
    </div>
  );
}
