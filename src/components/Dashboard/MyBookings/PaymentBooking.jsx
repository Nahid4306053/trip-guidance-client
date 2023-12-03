import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaymentBooking({ ele }) {
  const navigate = useNavigate();
  const handelpay = () => {
    if (ele.status === "accepted") {
      navigate(`/dashboard/payment/${ele._id}`);
    } else if (ele.status === "rejected") {
      toast.error("Sorry Your Booking was Rejected");
    } else {
      toast.warning("Wait for Tour Guide Acceptance ");
    }
  };
  return (
    <button
      data-tip="Pay now"
      onClick={handelpay}
      className="btn text-success tooltip btn-ghost btn-xs text-lg "
    >
      <i className="fa-brands fa-cc-mastercard"></i>
    </button>
  );
}
