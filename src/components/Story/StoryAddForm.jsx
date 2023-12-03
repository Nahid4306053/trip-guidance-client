import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";

export default function StoryAddForm() {
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const AxiosSecureV1 = useAxiosSecureV1();
  const formref = useRef();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await AxiosSecureV1.post("/story", data);
      return res;
    },
    onSuccess: (data) => {
      toast.success("Story Publish SuccessFully");
      setdescription("");
      setTitle("");
      formref.current.reset();
    },
    onError: () => {
      toast.error("Story Publish Failed");
    },
  });
  const handeformdata = (e) => {
    e.preventDefault();
    const formdata = { title, description };
    if (!title || title.trim().length < 50) {
      toast.error("Journy title should be minimam 50 character");
    } else if (!description || description.trim().length < 150) {
      toast.error("Description should be minimam 150 character");
    } else {
      mutation.mutate(formdata);
    }
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">Write a Journey Story</h1>
      <form ref={formref} onSubmit={handeformdata} className="mb-10">
        <div>
          <div className="flex mt-2 justify-end h-6 text-secondary text-sm">
            {title && (
              <span className="mr-0">
                {title.length} / minimam 50 character
              </span>
            )}
          </div>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            fullWidth
            required
            id="outlined-basic"
            label="Journey Story title"
            variant="outlined"
          />
        </div>
        <div>
          <div className="flex mt-5 justify-end h-6 text-secondary text-sm">
            {description && (
              <span className="mr-0">
                {description.length} / minimam 150 character
              </span>
            )}
          </div>
          <textarea
            className="textarea w-full  col-span-2 bg-transparent input-bordered focus:outline-none placeholder:text-blue-900"
            required
            rows={5}
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Journey Story"
          ></textarea>
          <button
            type="submit"
            className="btn bg-blue-900 hover:bg-blue-900 w-full mt-7 text-white"
          >
            publish
          </button>
        </div>
      </form>
    </div>
  );
}
