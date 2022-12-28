import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../AuthContext/AuthContext";
import "../HomePostSection/HomePostSection.css";

const HomePostSection = () => {
  const { UserSignIn } = useContext(ContextAuth);
  const [firebaseError, setFirebaseError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const imageHostKey = process.env.imageBb_key;
  // console.log(imageHostKey);

  const handlePost = (e) => {
    setFirebaseError("");

    // console.log(e);
    const image = e.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=27690bc33f1226affb494c6a408249ba`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const image = imageData.data.url;
        console.log(image);
        const data = {
          message: e.name,
          postImage: image,
        };

        const url = `${process.env.REACT_APP_URL}allPost`;

        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((update) => {
            // console.log(update);
            toast.success("successfully your post added");
            reset();
          })
          .catch((err) => console.log(err));

        // console.log(data);
      });
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="homePostSection postBgImage w-11/12 md:w-9/12 bg-white mx-auto rounded-lg  md:pt-36 pt-20">
      <h1 className="text-center py-6 text-3xl font-bold">ADD YOUR POST</h1>
      <form
        onSubmit={handleSubmit(handlePost)}
        className="mx-auto md:w-[600px] px-5 py-5"
      >
        <div className="space-y-1 text-sm mb-3">
          <p className="font-semibold">Add text</p>

          <textarea
            id="w3review"
            name="name"
            rows="10"
            required
            cols="50"
            {...register("name", { required: "name is required" })}
            placeholder="Post"
            className="w-full md:w-[600px] border-amber-100 border px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
          ></textarea>
        </div>
        <p className="font-semibold">ADD Media</p>

        <div className="flex space-x-4 items-center">
          <label
            htmlFor="image"
            required
            className="w-full md:w-[600px] border-amber-100 border px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black hover:bg-amber-300 cursor-pointer"
          >
            <input
              onChange={imageChange}
              type="file"
              name="image"
              id="image"
              required
              accept="image/*"
              {...register("image", { required: "photo is required" })}
              hidden
            />

            <h1 className="w-full md:w-[600px] ">Upload Image</h1>
            {errors.image && <p>{errors.image.message}</p>}
          </label>
        </div>
        <div className="space-y-1 text-sm mt-10 ">
          <input
            type="submit"
            value="ADD YOUR POST"
            className="w-full md:w-[600px] border-white border px-4 py-3 rounded-sm hover:bg-blue-200 bg-blue-300  outline-none placeholder-white text-black cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default HomePostSection;
