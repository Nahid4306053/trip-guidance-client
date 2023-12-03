import React from "react";

export default function Pagenation({ page, setpage, totalData, colSpan }) {
  const totalpage = Math.ceil(totalData / 8);

  return (
    <div className="flex justify-center">
      <div className="join border border-blue-100">
        <button
          onClick={() => setpage((old) => old - 1)}
          disabled={page < 2}
          className="join-item btn    hover:bg-yellow-500 hover:text-white   bg-blue-100"
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        {[...Array(totalpage).keys()].map((ele) => {
          return (
            <button
              key={ele * 3}
              onClick={() => setpage(ele + 1)}
              className={`join-item  hover:bg-yellow-500 hover:text-white   ${
                page === ele + 1 ? "bg-yellow-500 text-white" : "bg-blue-100"
              }  btn `}
            >
              {ele + 1}
            </button>
          );
        })}
        <button
          onClick={() => setpage((old) => old + 1)}
          disabled={page === totalpage}
          className="join-item btn    hover:bg-yellow-500 hover:text-white   bg-blue-100"
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
