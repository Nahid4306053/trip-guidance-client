import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMyWishList from "../../Hooks/useMyWishList";
import TableFoot from "../../components/Dashboard/ManagePackage/TableFoot";
import TableRow from "../../components/Dashboard/ManagePackage/TableRow";
import DeleteItem from "../../components/Dashboard/MyWishlist/DeleteItem";
import SmallLoading from "../../components/shared/SmallLoading";

export default function Mywishlist() {
  const [page, setpage] = useState(1);
  const { MyWishList, error, isError, isLoading, isSuccess } = useMyWishList(
    page,
    8
  );

  return (
    <div className="Packages p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          My Wishlist
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
              {MyWishList.data.WishLists.length > 0 ? (
                MyWishList.data.WishLists.map((ele) => {
                  return (
                    <TableRow data={ele.package}>
                      <td>
                        <Link to={`/singel-package/${ele.package._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-info tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                        <DeleteItem id={ele._id}></DeleteItem>
                      </td>
                    </TableRow>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-10 text-center ">
                    <h3 className="my-3 text-xl ">Your Wishlist is Empty</h3>
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
          {MyWishList?.data?.totalData > 0 && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={MyWishList?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
