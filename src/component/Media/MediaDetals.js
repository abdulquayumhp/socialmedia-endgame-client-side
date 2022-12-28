import React from "react";
import { useLoaderData } from "react-router-dom";
import EachMediaCardDetails from "./EachMediaCardDetails";

const MediaDetals = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="lg:w-9/12 w-11/12 clack mx-auto rounded-lg mb-5">
      <div className=" md:px-10 pt-20  h-[700px] md:w-8/12 w-12/12 mx-auto">
        {data.map((postImage) => (
          <EachMediaCardDetails postImage={postImage} key="postImage._id" />
        ))}
      </div>
      <div className="lg:w-8/12 w-11/12 bg-white mx-auto rounded-lg mb-5 my-5 p-5">
        <div className="">
          <h1>Add your comment</h1>
          <form className="my-3 ">
            <input
              type="email"
              name="password"
              placeholder="Comment"
              className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black mb-5"
            />
            <input
              className="bg-black px-4 py-3 cursor-pointer text-white"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MediaDetals;
