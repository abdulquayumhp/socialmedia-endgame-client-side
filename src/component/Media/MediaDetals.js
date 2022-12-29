import React from "react";
import { useLoaderData } from "react-router-dom";
import EachMediaCardDetails from "./EachMediaCardDetails";

const MediaDetals = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="lg:w-9/12 w-11/12 clack mx-auto rounded-lg mb-5">
      <div className=" md:px-10 pt-20  h-full md:w-8/12 w-12/12 mx-auto">
        {data.map((postImage) => (
          <EachMediaCardDetails postImage={postImage} key="postImage._id" />
        ))}
      </div>
    </div>
  );
};

export default MediaDetals;
