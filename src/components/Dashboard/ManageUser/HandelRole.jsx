import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
export default function HandelRole({ role, id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
      const res = AxiosSecureV1.patch(`/user/role/${id}`, data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("UserDatas");
      Swal.fire({
        title: "Succsefull!",
        text: "The role changed succsefully",
        icon: "success",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("User role changed falied");
    },
  });
  const handelrole = (role) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you Sure to change The Role , You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change The Role!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ role: role });
      }
    });
  };
  return (
    <td>
      {role !== "admin" && (
        <>
          {role === "tour guider" && (
            <Link to={`/guider-details/${id}`}>
              <button
                data-tip="View Profile"
                className="btn text-lg tooltip btn-ghost btn-xs "
              >
                <i className="fa-solid fa-square-info"></i>
              </button>
            </Link>
          )}
          <button
            onClick={() => handelrole("admin")}
            data-tip="Make Admin"
            className="btn  text-xl tooltip text-secondary  btn-ghost btn-xs"
          >
            <i className="fa-solid fa-user-tie"></i>
          </button>

          {role === "user" && (
            <button
              onClick={() => handelrole("tour guider")}
              data-tip="Make Tour Guider"
              className="btn text-accent  text-xl tooltip btn-ghost btn-xs  "
            >
              <i className="fa-regular fa-face-cowboy-hat"></i>
            </button>
          )}
        </>
      )}
    </td>
  );
}
