import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMyBookings from "../../Hooks/useMyBookings";
import TableFoot from "../../components/Dashboard/ManagePackage/TableFoot";
import TableRow from "../../components/Dashboard/ManagePackage/TableRow";
import CancelBooking from "../../components/Dashboard/MyBookings/CancelBooking";
import PaymentBooking from "../../components/Dashboard/MyBookings/PaymentBooking";
import SmallLoading from "../../components/shared/SmallLoading";

export default function MyBookings() {
  const [page, setpage] = useState(1);
  const { MyBookings, error, isError, isLoading, isSuccess } = useMyBookings(
    page,
    8
  );

  return (
    <div className="Packages p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          My Bookings
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar  table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Package Name</th>
              <th>Tour Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <tbody>
              {MyBookings.data.Bookings.length > 0 ? (
                MyBookings.data.Bookings.map((ele) => {
                  return (
                    <TableRow data={ele.package}>
                      <td>
                        <div
                          className={`badge capitalize text-white ${
                            ele.status === "in review"
                              ? "badge-info"
                              : ele.status === "rejected"
                              ? "badge-error"
                              : "badge-success"
                          }`}
                        >
                          {ele.status}
                        </div>
                      </td>
                      <td>
                        <Link to={`/singel-package/${ele.package._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-info tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                        <CancelBooking id={ele._id}></CancelBooking>
                        <PaymentBooking ele={ele}></PaymentBooking>
                      </td>
                    </TableRow>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="py-10 text-center ">
                    <h3 className="my-3 text-xl ">Your Bookings is Empty</h3>
                    <Link to="../../packages">
                      <button className="btn btn-primary capitalize btn-sm">
                        Visit Packages Page
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          )}
          {MyBookings?.data?.totalData > 0 && (
            <TableFoot
              colSpan={5}
              page={page}
              setpage={setpage}
              totalData={MyBookings?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
