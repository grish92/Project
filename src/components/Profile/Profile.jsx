import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
