// import React from "react";
// import { Link } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import BannerSection from "../components/Home/BannerSection";
import Tabsection from "../components/Home/Tabsection/Tabsection";
import TourTypesSection from "../components/Home/Tourtypes/TourTypesSection";
import OurAwardSection from "../components/Home/OurAward/OurAwardSection";
import StorySection from "../components/Home/Storys/StorySection";
import ContactBanner from "../components/Home/ContactBanner";
import Galllery from "../components/Home/Galllery";
import OurCountDown from "../components/Home/OurCouwndown";


export default function Home() {
  ScrollTop(0, 0);

  return (
    <>
      <Pagetitle>Home || TripGuidance</Pagetitle>
      <BannerSection></BannerSection>
      {/* <App></App> */}
      <Tabsection></Tabsection>
      <TourTypesSection></TourTypesSection>
      <OurAwardSection></OurAwardSection>
      <StorySection></StorySection>
      <ContactBanner></ContactBanner>
      <OurCountDown></OurCountDown>
      <Galllery></Galllery>
    </>
  );
}
