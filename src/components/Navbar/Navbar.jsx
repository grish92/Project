import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  let newSideBar = props.sideBarPages.map((el) => {
    return (
      <div className={classes.item}>
        <NavLink
          exact
          to={el.to}
          key={el.id}
          activeClassName={classes.navActiv}
        >
          {el.name}
        </NavLink>
      </div>
    );
  });

  let newFriends = props.following.map((elem) => {
    return (
      <div key={elem.id} className={classes.friend}>
        <div>
          <img src={elem.avatar} alt="" />
        </div>
        <div>{elem.first_name}</div>
        <div>{elem.last_name}</div>
        <div>{elem.email}</div>

        <button
          onClick={() => {
            props.unFollow(elem.id);
          }}
        >
          Unfollow
        </button>
      </div>
    );
  });
  return (
    <nav className={classes.nav}>
      {newSideBar}
      <div>
        <h3>Following</h3>
        <div>{newFriends}</div>
      </div>
    </nav>
  );
};
export default Navbar;
