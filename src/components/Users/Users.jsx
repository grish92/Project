import React from "react";
import classes from "./Users.module.css";

import photo from "../../photo/img.jpg";

export const Users = (props) => {
  console.log(props);

  return (
    <div>
      {props.users.map((e) => (
        <div key={e.id} className={classes.user}>
          <span>
            <img src={photo} alt="" />
            {!e.followed ? (
              <button onClick={() => props.follow(e.id)}>Follow</button>
            ) : (
              <button onClick={() => props.unFollow(e.id)}>Unfollow</button>
            )}
          </span>
          <span>
            <div> {`${e.name}  ${e.username}`}</div>
            <div> {e.email}</div>
          </span>
          <span>
            <div>{e.address.city}</div>
            <div>{e.address.street}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
