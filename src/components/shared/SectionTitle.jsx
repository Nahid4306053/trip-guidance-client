/* eslint-disable react/prop-types */

import { useMood } from "../../Context/TemplateMoodContext";


export default function SectionTitle({ title, subtitle, customcss }) {
  const { Darkmood } = useMood();
  return (
    <div
      className={`${
        customcss ? customcss : " text-center "
      } font-Nunito md:space-y-0 space-y-5`}
    >
      <h3 className="subtile text-yellow-500  text-xl font-semibold">
        {subtitle}
      </h3>
      <h1 className={`title md:leading-[80px]  text-5xl ${Darkmood ? "text-white" : "text-blue-900"}  font-extrabold `}>
        {title}
      </h1>
    </div>
  );
}
