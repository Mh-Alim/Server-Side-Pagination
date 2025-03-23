import React from "react";
import { CommentDataType } from "./Comments";

const Comment = ({ comments }: { comments: CommentDataType[] }) => {
  return comments.map((e) => {
    return (
      <div className=" border-l-2 pl-16 py-4 ">
        <div className=" flex gap-3 ">
          <img
            className="rounded-full w-10 h-10 "
            src={e.profileIcon}
            alt="profile-image"
          />
          <div>
            <strong>{e.name}</strong>
            <p>{e.comment.message}</p>
          </div>
        </div>
        <Comment comments={e.comment.replies} />
      </div>
    );
  });
};

export default Comment;
