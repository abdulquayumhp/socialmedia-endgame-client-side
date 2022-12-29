import React from "react";

const CommentCard = ({ da }) => {
  console.log(da);
  return (
    <div className="py-2 h-full">
      <div className="border border-1 p-2 m-2">
        <p>user Name : {da?.userName}</p>
        <p>Comment : {da?.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
