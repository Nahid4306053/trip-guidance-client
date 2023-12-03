import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePackages from "../../../Hooks/usePackages";
import PackageCard from "../../../components/shared/PackageCard";
import SmallError from "../../../components/shared/SmallError";
import SmallLoading from "../../../components/shared/SmallLoading";

export default function Packages() {
  const [page, setpage] = useState(1);
  const { Packages, error, isError, isLoading, isSuccess } = usePackages(
    page,
    6
  );

  return (
    <>
      <div className="my-20">
        <div className="mainpart">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <div className=" mx-auto">
              <div className="packeges mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Packages.data.packages.length > 0
                  ? Packages.data.packages.map((ele) => {
                      return <PackageCard data={ele}></PackageCard>;
                    })
                  : "No data found , this ui will cutomize soon "}
              </div>

              <div className="flex justify-end">
                <Link to="/packages">
                  <button className="btn bg-blue-900  hover:bg-blue-900  mt-14  text-white">
                    View All packages
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
