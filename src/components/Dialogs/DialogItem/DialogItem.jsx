import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={classes.dialog}>
      <NavLink to={path}>
        <img src={props.img} alt="" />
        {props.name}
        {props.surname}
      </NavLink>
    </div>
  );
};
