import React from "react";
import classes from "./Users.module.css";
export const Users = (props) => {
  console.log(props);

  let newUsers = props.users.map((e) => {
    return (
      <div>
        <div key={e.id} className={classes.user}>
          <span>
            <img src={e.photo} />
            {!e.followed ? (
              <button
                onClick={() => 
                  props.follow(e.id)
                }
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => 
                  props.unFollow(e.id)
                }
              >
                Unfollow
              </button>
            )}
          </span>
          <span>
            <div> {`${e.name}  ${e.surname}`}</div>
            <div> {e.status}</div>
          </span>
          <span>
            <div>{e.country}</div>
            <div>{e.city}</div>
          </span>
        </div>
      </div>
    );
  });

  return <div>{newUsers}</div>;
};
