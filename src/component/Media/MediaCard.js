import React, { useState } from "react";
import { FaHandPointRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loding from "../ShareableComponent/Loader/Loding";

const MediaCard = ({ allPost, refetch, isLoading }) => {
  const [like, setLike] = useState(0);
  console.log(typeof allPost.LoveCount, allPost.LoveCount);
  const [LoveCount, setLoveCount] = useState(
    allPost?.LoveCount > 1 ? allPost?.LoveCount : 0 + 1
  );
  const [LikeCount, setLikeCount] = useState(
    allPost?.LikeCount > 1 ? allPost?.LikeCount : 0 + 1
  );
  const { postImage, message, _id } = allPost;

  const handleHeart = (id) => {
    setLoveCount(() => LoveCount + 1);

    const url = `${process.env.REACT_APP_URL}updateLoveReaction?id=${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ LoveCount }),
    })
      .then((update) => {
        console.log(update);
        refetch();
      })
      .catch((err) => console.log(err));
  };
  const handleLike = (id) => {
    setLoveCount(() => LikeCount + 1);

    const url = `${process.env.REACT_APP_URL}updateLikeReaction?id=${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ LikeCount }),
    })
      .then((update) => {
        console.log(update);
        refetch();
      })
      .catch((err) => console.log(err));
  };
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div className="py-5 ">
      <div className="border border-1 h-full w-full  rounded-lg mx-auto ">
        <img
          className=" w-full object-cover rounded-t-lg h-96"
          src={postImage}
          alt=""
        />
        <div className="pt-5 pl-5">
          <h1>{message ? message.slice(0, 25) + "...." : "N/A"}</h1>
          <div className="flex items-center justify-around py-4">
            <div className="flex items-center ">
              <FaHeart
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleHeart(_id)}
              />
              <p className="px-2">{allPost?.LoveCount}</p>
            </div>
            <Link
              to={`/postDetails/${_id}`}
              className="cursor-pointer py-1 px-5 bg-amber-200"
            >
              Details
            </Link>
            <div className="flex items-center ">
              <p className="px-2">{allPost?.LikeCount}</p>
              <FaHandPointRight
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleLike(_id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
