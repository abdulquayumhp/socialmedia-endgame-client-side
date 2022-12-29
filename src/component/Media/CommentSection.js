import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ContextAuth } from "../../AuthContext/AuthContext";
import Loding from "../ShareableComponent/Loader/Loding";
import CommentCard from "./CommentCard";

const CommentSection = ({ postImage }) => {
  //   console.log(postImage);
  const { user } = useContext(ContextAuth);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["comments", postImage?._id],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_URL}comments?id=${postImage?._id}`).then(
        (res) => res.json()
      ),
  });
  //   console.log(data);
  if (isLoading) {
    return <Loding />;
  }
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const postId = postImage?._id;
    const data = {
      postId,
      comment: e.target.comment.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };
    // console.log(data);
    fetch(`${process.env.REACT_APP_URL}comments`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          e.target.reset();
          refetch();
          toast.success("Comment posted", { duration: 1000 });
        }
      });
  };

  return (
    <div className="w-full f-full bg-white mx-auto rounded-lg  my-5 p-5 mb-10">
      <div className="">
        <h1>Add your comment</h1>
        <form onSubmit={handleSubmitComment} className="my-3 ">
          <input
            type="text"
            name="comment"
            placeholder="Comment"
            className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black mb-5"
          />
          {user?.email ? (
            <input
              className="bg-black px-4 py-3 cursor-pointer text-white"
              type="submit"
              value="SUBMIT"
            />
          ) : (
            <Link
              to="/signIn"
              className="bg-black px-4 py-3 cursor-pointer text-white"
            >
              {" "}
              Please Sign In First
            </Link>
          )}
        </form>
      </div>
      <div>
        <h1>ALL Comment</h1>
        {data && data.length ? (
          <div>
            {data?.map((da) => (
              <CommentCard da={da} key="da._id" />
            ))}
          </div>
        ) : (
          <h1>No Comment add yet</h1>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
