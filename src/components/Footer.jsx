import React from "react";
import { useLocation } from "react-router-dom";
import { useMood } from "../Context/TemplateMoodContext";
import "../styles/footer.scss";
import logo from "/images/logo.png";
export default function Footer() {
  const { Darkmood } = useMood();
  const { pathname } = useLocation();
  const paths = ["/login", "/signup"];
  return (
    <footer className="bg-blue-100">
      <div className="grid  mt-10  container gap-8 mx-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="about_info mt-10">
          <img className="h-14 opacity-75" src={logo} alt="" />
          <br />
          <div className="info mt-5 flex gap-4 items-center">
            <h2 className="text-4xl   text-blue-900 w-10">
              <strong>
                <i className="fa-regular fa-location-dot"></i>
              </strong>
            </h2>
            <div className="location">
              <p>
                685 Market Street San Francisco, <br /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="info mt-5  flex gap-4 items-center">
            <h2 className="text-4xl  text-blue-900   w-10">
              <strong>
                <i className="fa-regular fa-phone"></i>
              </strong>
            </h2>
            <div className="tel">
              <p>Call us +(880) 01954849695</p>
            </div>
          </div>
          <div className="info mt-5  flex gap-4 items-center">
            <h2 className="text-4xl  text-blue-900   w-10">
              <strong>
                <i className="fa-regular fa-envelope"></i>
              </strong>
            </h2>
            <div className="tel">
              <p>Mail us ku4306053@gmail.com</p>
            </div>
          </div>
          <div className="socials flex gap-4">
            <a className="rounded-full mt-4" href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="rounded-full mt-4" href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="rounded-full mt-4" href="/">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className="rounded-full mt-4" href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="rounded-full mt-4" href="/">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="links mt-10">
          <h1 className="shops mt-4 text-2xl font-bold text-blue-900">
            Packages
          </h1>
          <ul className="mt-8 w-auto ">
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              New Packages
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Trending Packages
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Sale and Special offers
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Best deals
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Extreme Sports 
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Hiking and Camping
            </li>
          </ul>
        </div>
        <div className="links mt-10">
          <h1 className="shops mt-4 text-2xl font-bold text-blue-900">
            Instagram
          </h1>
          <div className="grid mt-10 lg:max-w-[280px] grid-cols-3 gap-5">
            <img src="https://i.ibb.co/K7Y1QnY/climbing-nevado-ishinca1.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/mvvCd3P/Nikkaluokta-Vakkotavare-Kungsleden-Trail.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/yRmGBtx/smokies.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/QMH7X0z/3day-tortuguero-2-lg.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/xSwmNjf/15.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/M59QYBL/145.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/fdwSDz3/sea-to-summit-allie-pepper-blog-6.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/WkDzJS4/sporty-zimowe-dla-dzieci-snowboard-122105-1-X.jpg" className="h-full w-full object-cover" alt="" />
            <img src="https://i.ibb.co/gWp4SW9/annapurna-base-camp-13-640-480.jpg" className="h-full w-full object-cover" alt="" />
          </div>
        </div>
        <div className="links mt-10">
          <h1 className="shops mt-4 text-2xl font-bold text-blue-900">
            Customer Service
          </h1>
          <ul className="mt-8 w-auto ">
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Search Terms
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Advanced Search
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Book And Canceletions
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Contact Us
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Consultant
            </li>
            <li className="leading-10 hover:text-blue-900 hover:underline cursor-pointer">
              Tour Suggetions
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"></div>
      <div
        className={`coppwright  ${Darkmood ? "bg-[#0e1218]" : "bg-blue-200"}  `}
      >
        <div className="container text-center py-6 mx-auto mt-10 flex-col gap-5 lg:flex-row  justify-between items-center">
          <span className="text-sm ">
            © {new Date().getFullYear()}
            <a href="#" className="hover:underline">
              TripGuidance™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
