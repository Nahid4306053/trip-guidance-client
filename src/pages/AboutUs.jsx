import React from "react";
import PageBanner from "../components/shared/PageBanner";
import { Link } from "react-router-dom";
import OverView from "../components/Home/Tabsection/OverView";
import ContactBanner from "../components/Home/ContactBanner";
import OurAwardSection from "../components/Home/OurAward/OurAwardSection";
import OurCountDown from "../components/Home/OurCouwndown";
import ScrollTop from "../Hooks/ScrollTop";
import Pagetitle from "../Hooks/Pagetitle";

export default function AboutUs() {
                    ScrollTop()
  return (
    <><Pagetitle>About us || TourGuidance</Pagetitle>
      <PageBanner title="About Us" bgimg="https://i.ibb.co/jRrg30L/IMG-2019-06-06-011244-1024x682.jpg" >
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-500" to="/">
            Home
          </Link>
          / About us
        </div>
      </PageBanner>
      <div>
       <div className="my-24 container mx-auto">
          <OverView></OverView>
       </div> 
       <ContactBanner></ContactBanner>
       <OurAwardSection></OurAwardSection>
       <OurCountDown></OurCountDown>
      </div>
    </>
  );
}
