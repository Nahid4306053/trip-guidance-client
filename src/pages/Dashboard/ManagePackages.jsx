import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePackages from "../../Hooks/usePackages";
import TableFoot from "../../components/Dashboard/ManagePackage/TableFoot";
import TableRow from "../../components/Dashboard/ManagePackage/TableRow";
import SmallLoading from "../../components/shared/SmallLoading";

export default function ManagePackages() {
  const [page, setpage] = useState(1);
  const { Packages, error, isError, isLoading, isSuccess } = usePackages(
    page,
    8
  );

  return (
    <div className="Packages p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          Manage Packages
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Package Name</th>
              <th>Tour Type</th>
              <th>Price</th>
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
              {Packages.data.packages.length > 0 &&
                Packages.data.packages.map((ele) => {
                  return (
                    <TableRow data={ele}>
                      <td>
                        <Link to={`/singel-package/${ele._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-info tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                      </td>
                    </TableRow>
                  );
                })}
            </tbody>
          )}
          {Packages?.data?.totalData > 0 && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={Packages?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
