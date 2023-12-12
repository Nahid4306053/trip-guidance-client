import  { useEffect, useRef, useState } from "react";

import "aos/dist/aos.css";
// import { ThreeCircles } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMood } from "../Context/TemplateMoodContext";
import ScrollTop from "../Hooks/ScrollTop";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import TopHeader from "../components/TopHeader";
import "../styles/App.scss";
import big_loading from '../assets/big_loading.json'
import Lottie from "lottie-react";
import Newsletter from "../components/Home/Newsletter";
import HaveQuery from "../components/Home/HaveQuery";
import { getmood, setmood } from "../Utils/Controllmodd";

export default function MainLayouts() {
  const [showController, setController] = useState(false);
  const navigation = useNavigation();
  const moodtoggler = useRef();

  const { Darkmood, setDarkmood } = useMood();
  const handeldarkmood = () => {
    if (moodtoggler.current.checked) {
      setmood("dark");
      setDarkmood(true);
    } else {
      setmood("light");
      setDarkmood(false);
    }
  };
  useEffect(() => {
  
    const mood = getmood();
    if (mood) {
      if (mood === "light") {
        moodtoggler.current.checked = false;
      } else {
        moodtoggler.current.checked = true;
      }
    }
  }, []);

  useEffect

  return (
    <div className="overflow-x-hidden min-h-screen  flex flex-col justify-between">
      <TopHeader />
      <Navber />
      <div
        className={`${
          showController ? "translate-x-6" : "translate-x-16"
        } transition-all shadow-xl duration-300 z-50  template-controler uppercase text-sm  py-6 px-2 rounded-l-lg right-0 flex items-center fixed  ${
          Darkmood ? "bg-base-300" : "bg-blue-200"
        }  top-1/2`}
      >
        <div
          onClick={() => setController(!showController)}
          className="items-center flex cursor-pointer"
        >
          <div>
            <i
              className={` fa-solid fa-angles-left fa-fade ${
                showController && "fa-rotate-180"
              }`}
            ></i>
          </div>
          <div className="mood  font-bold 2">
            {Darkmood ? "light" : "dark"} mood
          </div>
        </div>
        <div>
          <input
            onClick={handeldarkmood}
            ref={moodtoggler}
            type="checkbox"
            className=" toggle h-5 w-20 -ml-4 mt-2  rotate-90"
          />
        </div>
      </div>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      {navigation.state === "loading" ? (
        <div className=" flex justify-center min-h-screen items-center  w-full">
          <ScrollTop></ScrollTop>
          <Lottie className="md:h-[500px] h-[300px]" animationData={big_loading}></Lottie>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <HaveQuery></HaveQuery>
      <Newsletter></Newsletter>
      <Footer />
    </div>
  );
}
