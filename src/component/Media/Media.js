import { useQuery } from "@tanstack/react-query";
import React from "react";
import MediaCard from "./MediaCard";

const Media = () => {
  const url = `${process.env.REACT_APP_URL}allPost`;

  const { data: allPosts, refetch } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  console.log(allPosts);

  return (
    <div className="lg:w-9/12 bg-white mx-auto rounded-lg mb-5">
      <h1 className="font-bold text-3xl text-center py-5">All Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 ">
        {allPosts &&
          allPosts.map((allPost) => (
            <MediaCard allPost={allPost} key={allPost?._id} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default Media;
