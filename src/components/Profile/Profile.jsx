import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};
