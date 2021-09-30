import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  console.log(props)
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts
        newPostText={props.state.newPostText}
        posts={props.state.posts}
        store={props.store}
      />
    </div>
  );
};
