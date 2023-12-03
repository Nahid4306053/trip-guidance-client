import React from "react";

export default function TableRow({ data,children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  w-12 h-12">
              <img src={data.gallery[0]} alt={data.title} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">{data.title}</div>
          </div>
        </div>
      </td>
      <td>
        {data.tour_type}
        <br />
        <div className="flex mt-2 m">
    
        </div>
      </td>
      <td>${data.price}</td>
     
        {children}
    
    </tr>
  );
}
