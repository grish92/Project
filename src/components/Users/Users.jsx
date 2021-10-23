import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Users.module.css";
import { useHistory } from "react-router-dom";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const history = useHistory();
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? styles.selectedPage : ""}
              onClick={(e) => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((e) => (
          <div key={e.id} className={classes.user}>
            <span>
              <NavLink to={"/user/" + e.id}>
                <img src={e.avatar} alt="" />
              </NavLink>

              <button
                disabled={props.following.includes(e)}
                onClick={() => {
                  props.follow(e.id);
                }}
              >
                Follow
              </button>
              <button
                disabled={props.dialogs.includes(e)}
                onClick={() => {
                  props.sendMessage(e.id);
                  history.push("/dialogs");
                }}
              >
                send message
              </button>
            </span>
            <span>
              <div> {`${e.first_name}  ${e.last_name}`}</div>
              <div> {e.email}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
