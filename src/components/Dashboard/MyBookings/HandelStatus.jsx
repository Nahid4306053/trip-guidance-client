import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";

export default function HandelStatus({ id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const queryClient = useQueryClient();
  const [status, setStatus] = useState();
  const mutation = useMutation({
    mutationFn: (data) => {
      const res = AxiosSecureV1.patch(`/package/booking/status/${id}`, data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("MyBookings");
      toast.success(`The Booking ${status} SuccessFully`);
    },
    onError: (error) => {
      toast.error(`The Booking ${status} Failed`);
    },
  });
  const handelStatus = (status) => {
    setStatus(status);
    if (status === "rejected") {
      Swal.fire({
        title: "Are you sure?",
        text: "You Want Reject the Assigned Tour",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!",
      }).then((result) => {
        if (result.isConfirmed) {
          mutation.mutate({ status: status });
        }
      });
    } else {
      mutation.mutate({ status: status });
    }
  };

  return (
    <>
      <button
        data-tip="Reject"
        onClick={() => handelStatus("rejected")}
        className="btn text-error tooltip btn-ghost btn-xs text-lg "
      >
        <i className="fa-solid fa-xmark-to-slot"></i>
      </button>
      <button
        onClick={() => handelStatus("accepted")}
        data-tip="Accept"
        className="btn text-success tooltip btn-ghost btn-xs text-lg "
      >
        <i className="fa-sharp fa-solid fa-badge-check"></i>
      </button>
    </>
  );
}
