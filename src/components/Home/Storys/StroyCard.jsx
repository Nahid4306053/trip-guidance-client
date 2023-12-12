/* eslint-disable react/prop-types */
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useMood } from "../../../Context/TemplateMoodContext";

export default function StroyCard({ data }) {
  const { createdAt, description, title, writer } = data || {};
  const { Darkmood } = useMood();
  return (
    <div className="Card rounded-lg group relative  flex ">
      <div className="avatar top-[calc(50%-96px)] border rounded-bl-lg rounded-tr-lg overflow-hidden h-24 absolute w-24 object-cover">
        <img src={writer?.photoURL} alt="" />
      </div>
      <div className={`description ml-12 pl-20 ${Darkmood ? "bg-base-300" : "bg-blue-100"}  pr-10 py-10 shadow-lg w-full`}>
        <h1 className="title text-sky-500 md:text-xl font-semibold ">
          {title.slice(0, 55)}...
        </h1>
        <p className="mt-1 md:text-base text-xs">
          {moment(createdAt).format("MMMM Do , YYYY")}
        </p>
        <p className="mt-4 md:text-base text-xs leading-5 md:leading-7">
          {description.slice(0, 120)}...
        </p>
        <Link to={`/fullstroy/${data._id}`}>
          <button className="btn btn-xs md:btn-sm  mt-5 capitalize">
            <span className=" group-hover:-tracking-[0px] group-hover:opacity-100 transition-all  -tracking-[7px] opacity-0">
              Read full story
            </span>
            <i className="group-hover: -ml-2 group-hover:ml-0  fa-regular fa-circle-arrow-right"></i>
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
