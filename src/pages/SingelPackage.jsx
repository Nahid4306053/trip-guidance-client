import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import UseSingelPackage from "../Hooks/UseSingelPackage";
import BookingPackage from "../components/PackageDetail/BookingPackage";
import Gallery from "../components/PackageDetail/Gallery";
import Header from "../components/PackageDetail/Header";
import TourGuiders from "../components/PackageDetail/TourGuiders";
import TourLoaction from "../components/PackageDetail/TourLoaction";
import PageBanner from "../components/shared/PageBanner";
import SmallError from "../components/shared/SmallError";
import SmallLoading from "../components/shared/SmallLoading";
export default function SingelPackage() {
  const { id } = useParams();
  ScrollTop();
  const navigate = useNavigate();
  const { Package, error, isError, isLoading, isSuccess } =
    UseSingelPackage(id);

  return isLoading ? (
    <div className="w-full mt-40 flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full mt-40 flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
    <>
      <Pagetitle>{Package?.data?.title} || TripGuidance</Pagetitle>
      <PageBanner title={Package.data?.title} bgimg={Package.data.gallery[0]}>
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-500" to="/">
            Home
          </Link>{" "}
          /
          <Link className="hover:text-yellow-500" to="/packages">
            Packages
          </Link>{" "}
          / Package Details
        </div>
      </PageBanner>
      <div className="container mx-auto my-20">
        <div className="layout  lg:flex gap-20">
          <div className="w-full lg:w-8/12 main-bar">
            <Header data={Package.data}></Header>
            <Gallery
              id={Package.data._id}
              data={Package.data.gallery}
            ></Gallery>
            <div className="overview mt-14">
              <h4 className="text-3xl text-blue-900  text font-bold">
                Overview
              </h4>
              <p className="leading-8 mt-5 break-words">
                {Package.data.description}
              </p>
            </div>
            <div className="tourPlan mt-14">
              <h4 className="text-3xl text-blue-900  text font-bold">
                Tour Plan
              </h4>
              <br />
              {Package.data.tour_plan.map((ele, ind) => {
                return (
                  <div className="mt-3 space-y-4 bg-blue-100 p-5 rounded-lg">
                    <h1 className="text-xl font-bold break-words">
                      {ele?.title}
                    </h1>
                    <p className="mt-2 ml-0 break-words">{ele.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="overview mt-14">
              <h4 className="text-3xl text-blue-900  text font-bold">
                Tour Location
              </h4>
              <div className="mt-10">
                <TourLoaction area={Package.data.destination}></TourLoaction>
              </div>
            </div>

            <div className="overview mt-14">
              <h4 className="text-3xl text-blue-900  text font-bold">
                Tour Guiders:
              </h4>
              <TourGuiders></TourGuiders>
            </div>
            <div className="flex justify-end">
              <Link to="/tour-guiders">
                <button className="btn  bg-sky-900 hover:bg-sky-900 mt-14 text-white ">
                  View all Tour Guider{" "}
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:mt-0 md:mt-20 mt-10 lg:w-4/12 side-bar">
            <BookingPackage data={Package.data}></BookingPackage>
          </div>
        </div>
      </div>
    </>
  );
}
