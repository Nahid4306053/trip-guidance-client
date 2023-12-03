import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/team_card.scss";
export default function ToureGideCard({ data }) {
  const { displayName, role, email, photoURL } = data || {};
  return (
    <div className="team_card  bg-blue-200 h-[550px] rounded-md shadow-lg overflow-hidden relative flex flex-col items-center justify-center">
      <div className="overlay absolute">
        <img
          src={photoURL}
          className="h-full -mt-14 object-cover w-full object-top "
          alt=""
        />
        <div className="absolute ov_item top-0 h-full w-full"></div>
      </div>

      <div className="team_card_img absolute">
        <img className="h-full w-full  object-cover" src={photoURL} alt="" />
      </div>
      <div className="description text-center grid gap-3 px-5">
        <p className="text-blue-900 text-xl  font-bold capitalize">{role}</p>
        <p className="text-sky-500 text-5xl font-bold">
          <Link to={`/guider-details/${data._id}`}>{displayName}</Link>
        </p>
        <div className="social text-xl flex justify-center gap-4 text-blue-900 ">
          <Link to={`/guider-details/${data._id}`}>
            <button className="btn px-5 clipshape2 rounded-none btn-info text-white mt-2 hover:-translate-y-1">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
