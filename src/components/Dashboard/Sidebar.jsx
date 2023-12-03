import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthnicationContext";

export default function Sidebar() {
  const { CurrentUser } = useAuth();
  const role = CurrentUser.role;
  return (
    <div className="pt-10  text-white">
      <div className="sidebar main_NavLinks text-lg font-sem ">
        <div className="w-full ">
          <NavLink className="px-5" to="/dashboard/profile">
            <i className="fa-light fa-user-vneck mr-2 w-5"></i>
            <span className="hidden lg:inline">My Profile</span>
          </NavLink>
        </div>

        {role === "user" && (
          <>
            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/my-bookings">
                <i className="fa-sharp fa-solid fa-bookmark mr-2 w-5"></i>
                <span className="hidden lg:inline">My Bookings</span>
              </NavLink>
            </div>

            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/my-wishlist">
                <i className="fa-solid fa-heart mr-2 w-5"></i>
                <span className="hidden lg:inline">My Wishlist</span>
              </NavLink>
            </div>
            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/payment-history">
                <i className="fa-brands fa-cc-visa mr-2 w-5"></i>
                <span className="hidden lg:inline">Payment History</span>
              </NavLink>
            </div>
          </>
        )}

        {
          <div className="w-full">
            {role === "tour guider" && (
              <NavLink className="px-5 py-3" to="/dashboard/assigned-tours">
                <i className="fa-light fa-clipboard-check mr-2 w-5"></i>
                <span className="hidden lg:inline">My Assigned Tours</span>
              </NavLink>
            )}
          </div>
        }

        {role === "admin" && (
          <>
            {" "}
            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/add-package">
                <i className="fa-light fa-calendar-circle-plus mr-2 w-5"></i>
                <span className="hidden lg:inline">Add Package</span>
              </NavLink>
            </div>
            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/manage-packages">
                <i className="fa-regular fa-table-list mr-2 w-5"></i>
                <span className="hidden lg:inline">Manage Packages</span>
              </NavLink>
            </div>
            <div className="w-full">
              <NavLink className="px-5 py-3" to="/dashboard/users">
                <i className="fa-solid fa-address-book mr-2 w-5"></i>
                <span className="hidden lg:inline">Manage Users</span>
              </NavLink>
            </div>
          </>
        )}
      </div>
      <div className="divide h-[1px] my-7 lg:my-5 bg-white "></div>
      <div className="others_NavLinks  text-lg font-sem ">
        <div className="w-full">
          <NavLink className="px-5 py-3" to="/">
            <i className="fa-solid fa-house mr-2 w-5"></i>
            <span className="hidden lg:inline">Home</span>
          </NavLink>
        </div>

        <div className="w-full">
          <NavLink className="px-5 py-3" to="/dashboard/announcements">
            <i className="fa-solid fa-tty mr-2 w-5"></i>
            <span className="hidden lg:inline">Offer Annoucments</span>
          </NavLink>
        </div>

        <div className="w-full">
          <NavLink className="px-5 py-3" to="/dashboard/settings">
            <i className="fa-regular fa-gear mr-2 w-5"></i>
            <span className="hidden lg:inline">Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
