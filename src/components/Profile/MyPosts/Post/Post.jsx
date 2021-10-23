import React from "react";
import classes from "./Post.module.css";
import img from "./../../../../photo/img.jpg";
export const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={img} alt="" />
      {props.message}
      <div>
        <span>like</span>
        {props.likescount}
      </div>
    </div>
  );
};
