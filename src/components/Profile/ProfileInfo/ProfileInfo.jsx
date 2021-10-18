import React from "react";
import classes from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      {/* <img
        src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        alt=""
      ></img> */}
      <div>
        <ProfileStatus value={'enter status'} />
      </div>

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
