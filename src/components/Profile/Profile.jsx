import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import { ProfilePage } from "./ProfileInfo/ProfilePage";

export const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfilePage />
      <MyPostsContainer />
    </div>
  );
};
