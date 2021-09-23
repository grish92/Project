import React from "react";
import classes from "./Messages.module.css";

export const Messages = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};
