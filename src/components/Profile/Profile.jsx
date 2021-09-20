import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={classes.content}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"></img>

      <div>ava+description</div>
      <MyPosts/>
    </div>
  );
};
