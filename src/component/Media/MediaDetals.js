import React from "react";
import { FaHandPointRight, FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MediaDetals = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="lg:w-9/12 w-11/12 bg-white mx-auto rounded-lg mb-5">
      <div className=" md:px-10 py-20 h-[800px] w-8/12 mx-auto">
        {data.map((postImage) => (
          <div className="border border-1 h-[600px] w-full  rounded-lg mx-auto  ">
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
                    onClick={postImage.handleHeart}
                  />
                  <p className="px-2">{postImage.PLove}</p>
                </div>

                <div className="flex items-center ">
                  <p className="px-2">{postImage.like}</p>
                  <FaHandPointRight
                    className="cursor-pointer hover:text-red-500"
                    onClick={postImage.handleLike}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-8/12 w-11/12 bg-white mx-auto rounded-lg mb-5 my-5">
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
  );
};

export default MediaDetals;
