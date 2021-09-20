import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={classes.posts}>
        <Post message='hi,how are you?' likescount='0'/>
        <Post message='my first message' likescount='23'/>
      </div>
    </div>
  );
};
