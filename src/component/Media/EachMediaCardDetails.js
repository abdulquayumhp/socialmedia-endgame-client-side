import React, { useState } from "react";
import { FaHandPointRight, FaHeart } from "react-icons/fa";
import CommentSection from "./CommentSection";

const EachMediaCardDetails = ({ postImage }) => {
  // console.log(postImage);

  const [LoveCount, setLoveCount] = useState(
    postImage?.LoveCount > 1 ? postImage?.LoveCount : 0 + 1
  );
  const [LikeCount, setLikeCount] = useState(
    postImage?.LikeCount > 1 ? postImage?.LikeCount : 0 + 1
  );

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="border border-1  w-full  rounded-lg mx-auto  ">
        <img
          className=" w-full object-cover rounded-t-lg h-96"
          src={postImage.postImage}
          alt=""
        />
        <div className="pt-5 pl-5">
          <h1>{postImage.message}</h1>
          <div className="flex items-center justify-around py-4">
            <div className="flex items-center ">
              <FaHeart
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleHeart(postImage._id)}
              />
              <p className="px-2">{postImage?.LoveCount}</p>
            </div>

            <div className="flex items-center ">
              <p className="px-2">{postImage?.LikeCount}</p>
              <FaHandPointRight
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleLike(postImage._id)}
              />
            </div>
          </div>
        </div>
      </div>
      <CommentSection postImage={postImage} />
    </>
  );
};

export default EachMediaCardDetails;
