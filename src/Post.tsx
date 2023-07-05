import React from "react";
import { TPost } from "./types";

const Post = ({ post, fun }: Ipost) => {
  return (
    <>
      {post.map((e) => (
        <div
          style={{
            height: "150px",
            width: "350px",
            margin: "5px",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{e.content}</h2>
          <p>{e.id}</p>
          <button
            style={{ borderRadius: "5px" }}
            onClick={() => {
              fun(e);
            }}
          >
            Delete Post
          </button>
        </div>
      ))}
    </>
  );
};

interface Ipost {
  post: TPost[];
  fun: (post: TPost) => void;
}

export default Post;
