import { Masonry } from "@mui/lab";
import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

export default function Galllery() {
  const [GalleryData, setGalleryData] = useState();
  const [imgfull, setimgfull] = useState();
  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
      })
      .catch((err) => console.log(err));
  }, [GalleryData]);

  const openfullscreen = (img) => {
    document.getElementById("my_modal_3").showModal();
    setimgfull(img);
  };

  return (
    <div className="container mx-auto mt-28 my-20">
      <SectionTitle
        subtitle="Unforgettable Experiences"
        title="Explore Our Gallery"
      ></SectionTitle>

      <div className="mt-14">
        {GalleryData && GalleryData.length > 0 && (
          <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={3}>
            {GalleryData.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className="item group transition-all rounded-lg relative overflow-hidden"
                >
                  <img className="w-full" src={ele.image} alt="gallery" />
                  <div className="h-1/2 w-full absolute group-hover:top-1/2 top-full duration-300 transition-all bg-opacity-40 bg-black text-5xl flex justify-center items-center text-white cursor-pointer">
                    <i
                      onClick={() => openfullscreen(ele.image)}
                      className="  fa-light fa-magnifying-glass-plus"
                    ></i>
                  </div>
                </div>
              );
            })}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          </Masonry>
        )}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-transparent w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">
              ✕
            </button>
          </form>
          <img className="w-full" src={imgfull} alt="" />
        </div>
      </dialog>
    </div>
  );
}
