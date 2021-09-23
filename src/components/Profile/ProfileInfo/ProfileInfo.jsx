import React from "react";
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div className={classes.content}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"></img>

      <div className={classes.descriptionBlock}>ava+description</div>
    </div>
  );
};
