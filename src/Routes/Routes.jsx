import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthnicationContext from "../Context/AuthnicationContext";
import TemplateMoodContext from "../Context/TemplateMoodContext";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MainLayouts from "../layouts/MainLayouts";
import Addpackage from "../pages/Dashboard/Addpackage";
import ManagePackages from "../pages/Dashboard/ManagePackages";
import MyAssignedTours from "../pages/Dashboard/MyAssignedTours";
import MyBookings from "../pages/Dashboard/MyBookings";
import MyProfile from "../pages/Dashboard/MyProfile";
import Mywishlist from "../pages/Dashboard/Mywishlist";
import User from "../pages/Dashboard/Users";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Packages from "../pages/Packages";
import Signup from "../pages/Signup";
import SingelPackage from "../pages/SingelPackage";
import TourGuiderProfile from "../pages/TourGuiderProfile";
import Login from "../pages/logIn";
import AuthHandler from "./AuthHandler";
import PrivateRouter from "./PrivateRouter";
import Community from "../pages/Comunity";
import Fullstory from "../pages/Fullstory";
import TourGuiders from "../pages/TourGuiders";
import Payment from "../pages/Dashboard/Payment";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import { Announcement } from "@mui/icons-material";
import OfferAnnouncements from "../pages/Dashboard/OfferAnnouncements";
import Setting from "../pages/Dashboard/Setting";
const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <MainLayouts />
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: (
      <TemplateMoodContext>
        <Notfound />
      </TemplateMoodContext>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/packages",
        element: <Packages />,
      }
      ,
      {
        path: "/singel-package/:id",
        element: <SingelPackage />,
      },
      {
        path: "/guider-details/:id",
        element: <TourGuiderProfile />,
      },
      {
        path: "/community",
        element: <Community />,
      },
       {
        path: "/fullstroy/:id",
        element: <Fullstory />,
      },
       {
        path: "/tour-guiders",
        element: <TourGuiders />,
      }, {
        path: "/contact",
        element: <ContactUs />,
      },{
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Signup></Signup>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Login></Login>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <PrivateRouter>
            <DashBoardLayout />
          </PrivateRouter>
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: <Notfound></Notfound>,
    children: [
      { path: "add-package", element: <Addpackage></Addpackage> },
      { path: "manage-packages", element: <ManagePackages></ManagePackages> },
      { path: "users", element: <User></User> },
      { path: "profile", element: <MyProfile></MyProfile> },
      { path: "my-wishlist", element: <Mywishlist></Mywishlist> },
      { path: "my-bookings", element: <MyBookings></MyBookings> },
      { path: "assigned-tours", element: <MyAssignedTours></MyAssignedTours> },
      { path: "payment/:id", element: <Payment></Payment> }, 
      { path: "payment-history", element: <MyPaymentHistory></MyPaymentHistory> }, 
      { path: "announcements", element: <OfferAnnouncements></OfferAnnouncements> },
      { path: "settings", element: <Setting></Setting> },
    ],
  },
]);

export default CreateDRouter;
