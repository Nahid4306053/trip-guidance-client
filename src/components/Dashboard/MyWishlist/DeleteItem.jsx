import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";

export default function DeleteItem({ id }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await AxiosSecureV1.delete(`/wishlist/singel/${id}`);
      return res;
    },
    onSuccess: () => {
      toast.success("Item Removed Successfully");
      QueryClient.invalidateQueries("MyWishList");
    },
    onError: () => {
      toast.error("Item Removed failed");
    },
  });
  const handelDelete = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handelDelete}
      data-tip="remove"
      className="btn tooltip btn-ghost btn-xs text-lg "
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
