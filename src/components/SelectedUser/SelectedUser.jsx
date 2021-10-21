import React from "react";
import { SelectedUserInfo } from "./SelectedUserInfo/SelectedUserInfo";
import { SelectedUserPosts } from "./SelectedUserPosts/SelecetedUserPosts";

export const SelectedUser = (props) => {
  return (
    <div>
      <SelectedUserInfo profile={props.profile} />
      <SelectedUserPosts posts={props.posts} />
    </div>
  );
};
