import React from "react";
import { ProfileInfo } from "./ProfileInfo";
import classes from "./ProfilePage.module.css";
import { ProfileStatus } from "./ProfileStatus";
import img from "./../../../photo/img.jpg";
export const ProfilePage = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.image}>
        <img src={img} alt=""></img>
      </div>

      <div className={classes.info}>
        <ProfileInfo />
      </div>
      <div className={classes.status}>
        <ProfileStatus  />
      </div>
    </div>
  );
};
