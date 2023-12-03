import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import usePlace from "../../Hooks/usePlace";
import useTourType from "../../Hooks/useTourType";
import UploadIMG from "../../Utils/UploadIMG";
import DragAndDropImg from "../../components/Dashboard/AddPakage/DragAndDropImg";
export default function Addpackage({ scrollto }) {
  const [Errors, setErrors] = useState([]);
  const [countActivity, setcountActivity] = useState(0);
  const { isLoading, isError, isSuccess, tourTypes, error } = useTourType();
  const [loading, setloading] = useState(false);
  const [selectedplace, setSelectedPlace] = useState();
  const [tourTypevalue, setTourtaypeValue] = useState();
  const {
    isLoading: dataload,
    isError: daatiserror,
    isSuccess: datasuccess,
    Place,
    error: dataerror,
  } = usePlace();
  const navigate = useNavigate();
  const formref = useRef();
  const AxiosSecureV1 = useAxiosSecureV1();

  const mutation = useMutation({
    mutationFn: (data) => {
      const res = AxiosSecureV1.post("/package", data);
      return res;
    },
    onSuccess: () => {
      toast.success("Package added Succefully");
      formref.current.reset();
      setSelectedPlace();
      setTourtaypeValue();
      inputRef.current = "";
      navigate("/dashboard/manage-packages");
    },
    onError: () => {
      toast.error("Package added Failed");
    },
  });
  const {
    acceptedFiles,
    getRootProps,
    fileRejections,
    getInputProps,
    inputRef,
  } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 1048576,
    maxFiles: 5,
  });

  const handelSubmitdata = async (form) => {
    form.preventDefault();
    let err = [];
    const galleryimges = acceptedFiles;
    const tour_type = form.target.tour_type.value;
    const title = form.target.title.value;
    const day = form.target.day.value;
    const price = form.target.price.value;
    const destination = form.target.destination.value;
    const description = form.target.description.value;

    const tour_plan = [...Array(countActivity + 1).keys()].map((ele, ind) => {
      if (
        form.target["activitytitle" + (ind + 1)].value.trim() === "" ||
        form.target["activitydescription" + (ind + 1)].value.trim() === ""
      ) {
        err.push("Activity Title and Description required");
        return;
      } else {
        return {
          title: form.target["activitytitle" + (ind + 1)].value.trim(),
          description:
            form.target["activitydescription" + (ind + 1)].value.trim(),
        };
      }
    });

    if (galleryimges.length < 3) {
      err.push("Upload Minimam 3 gallery img");
    }

    if (title.trim() === "") {
      err.push("Title is required");
    }
    if (description.trim().length < 100) {
      err.push("Description should be minimam 100 Character");
    }
    setErrors(err);
    if (err.length === 0) {
      try {
        setloading(true);
        let gallery = await Promise.all(
          [...Array(acceptedFiles.length).keys()].map(async (ele, ind) => {
            const result = await UploadIMG(acceptedFiles[ind]);
            if (result.data.data.display_url) {
              return result.data.data.display_url;
            }
          })
        );

        if (gallery.length === acceptedFiles.length) {
          setloading(false);
          const fullData = {
            tour_type,
            title,
            day,
            price,
            destination: Place.data.filter(
              (ele) => ele.place === destination
            )[0],
            description,
            tour_plan,
            gallery,
          };

          mutation.mutate(fullData);
        } else {
          setErrors(["You can upload Duplicate Img"]);
          toast.error("You can upload Duplicate Img");
        }
      } catch (err) {
        console.log(err);
        setErrors(["There is a Problem Occured while Uploading Img"]);
        toast.error("There is a Problem Occured while Uploading Img");
      }
    } else {
      toast.error("Scroll top to view error");
    }
  };
  return (
    <div className="p-10">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          Add a Package
        </h1>
      </div>
      {Errors.length > 0 && (
        <div className="erorrs  text-red-600 my-5 bg-red-200 p-4 rounded-lg">
          <ul className="list-disc grid gap-2">
            {Errors.map((ele, ind) => {
              return (
                <li key={ind} className="capitalize  ml-4">
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <form
        ref={formref}
        onSubmit={handelSubmitdata}
        className="md:grid space-y-5 md:space-y-0 md:grid-cols-2 gap-4 mt-10 md:px-10"
      >
        <div className="col-span-2">
          <DragAndDropImg
            acceptedFiles={acceptedFiles}
            getRootProps={getRootProps}
            fileRejections={fileRejections}
            getInputProps={getInputProps}
          ></DragAndDropImg>
        </div>
        <TextField
          fullWidth
          required
          id="Title"
          name="title"
          label="Title"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select a tour Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tourTypevalue}
            name="tour_type"
            label="Select a tour Type"
            required
            onChange={(e) => setTourtaypeValue(e.target.value)}
          >
            {isSuccess &&
              tourTypes.data &&
              tourTypes.data.map((ele, ind) => {
                return (
                  <MenuItem value={ele.tour_type} key={ele._id}>
                    {ele.tour_type}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="number"
          required
          id="outlined-basic"
          name="price"
          label="Price"
          variant="outlined"
        />
        <TextField
          fullWidth
          type="number"
          required
          id="outlined-basic"
          name="day"
          label="Total tour Day"
          variant="outlined"
        />
        <div className="col-span-2">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select a Destination
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedplace}
              label="Select a Destination"
              name="destination"
              required
              onChange={(e) => setSelectedPlace(e.target.value)}
            >
              {datasuccess &&
                Place.data &&
                Place.data.map((ele, ind) => {
                  return (
                    <MenuItem value={ele.place} key={ele._id}>
                      {ele.place}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
        <textarea
          className="textarea w-full  col-span-2 bg-transparent input-bordered focus:outline-none placeholder:text-blue-900"
          required
          rows={5}
          name="description"
          placeholder="Description"
        ></textarea>
        <div className="tourplan mt-5 col-span-2">
          <h3 className="text">Tour Plans</h3>

          <div className="default w-full mt-5 flex flex-col gap-5">
            <TextField
              fullWidth
              required
              id="activity"
              name="activitytitle1"
              label="Activity title"
              variant="outlined"
            />
            <textarea
              className="textarea w-full col-span-2 bg-transparent input-bordered focus:outline-none placeholder:text-blue-900"
              name="activitydescription1"
              required
              rows={3}
              placeholder=" Activity Description"
            ></textarea>
          </div>

          {countActivity > 0 &&
            [...Array(countActivity).keys()].map((ele, ind) => {
              return (
                <div key={ind} className="default w-full mt-8 flex flex-col gap-5">
                  <div className="flex justify-end">
                    <div
                      onClick={() => setcountActivity((old) => old - 1)}
                      className="btn-circle btn text-xl text-red-600 btn-sm"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <TextField
                    fullWidth
                    required
                    name={"activitytitle" + (ind + 2)}
                    id="activity"
                    label="Activity title"
                    variant="outlined"
                  />
                  <textarea
                    className="textarea w-full col-span-2 bg-transparent input-bordered focus:outline-none placeholder:text-blue-900"
                    name={"activitydescription" + (ind + 2)}
                    required
                    rows={3}
                    placeholder="Activity Description"
                  ></textarea>
                </div>
              );
            })}
        </div>
        <div>
          <div
            onClick={() => setcountActivity((old) => old + 1)}
            className="btn capitalize"
          >
            <i className="fa-solid fa-circle-plus"></i> Add more activity
          </div>
        </div>
        <button
          className="btn col-span-2 w-full bg-blue-900 border-none hover:bg-blue-900 text-white"
          disabled={mutation.isPending || loading}
          type="submit"
        >
          {mutation.isPending || loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Add Package"
          )}
        </button>
      </form>
    </div>
  );
}
