import React from "react";
import classes from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://www.canon-emirates.ae/media/quality-photo-240_tcm209-1178372.png" />
      {props.message}
      <div>
        <span>like</span>
        {props.likescount}
      </div>
    </div>
  );
};
