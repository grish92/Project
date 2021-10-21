import React from "react";
import { Preloader } from "../../common/Preloader";
import classes from "./SelectedUserInfo.module.css";

export const SelectedUserInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.avatar} alt="" />
        <div>
          <div>Name: {props.profile.first_name}</div>
          <div>Surname: {props.profile.last_name}</div>
          <div>Email: {props.profile.email}</div>
        </div>
      </div>
    </div>
  );
};
