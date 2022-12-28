import { useQuery } from "@tanstack/react-query";
import React from "react";
import MediaCard from "../../Media/MediaCard";

const HomeTopPostSection = () => {
  const { data, refetch } = useQuery({
    queryKey: ["popularPosts"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}popularPost`);
      const data = await res.json();
      return data;
    },
  });
  console.log(data);

  return (
    <div className=" w-11/12 lg:w-9/12  mx-auto rounded-lg mb-5 my-5 bg-white py-5">
      <h1 className="text-2xl text-center font-bold">Top Popular Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 py-10">
        {data &&
          data.map((allPost) => (
            <MediaCard allPost={allPost} key={allPost?._id} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default HomeTopPostSection;
