import React from "react";

export default function PaymentTableRow({data}) {
  const {totalpay,package:{gallery,title,price},transectionId} = data || {}                   
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  w-12 h-12">
              <img src={gallery[0]} alt={data.title} />
            </div>
          </div>
          <div>
            <div className="font-bold  max-w-[150px]">{title}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex mt-2  "><span className="bg-success text-white py-1  px-4 rounded-lg text-xs">{transectionId}</span></div>
      </td>
      <td>${price}</td>
      <td>${totalpay}</td>
    </tr>
  );
}
