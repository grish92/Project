import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "./../../photo/logo.png";

const Navbar = (props) => {
  let newSideBar = props.sideBarPages.map((el) => {
    return (
      <div className={classes.item}>
        <NavLink exact to={el.to} id={el.id} activeClassName={classes.navActiv}>
          <img src={el.src} alt="" className={classes.linkLogo} />
          {el.name}
        </NavLink>
      </div>
    );
  });

  let newFriends = props.following.map((elem) => {
    return (
      <div id={elem.id} className={classes.friend}>
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
      <img src={logo} alt="" className={classes.logo} />
      {newSideBar}
      <div>
        <h3>Following</h3>
        <div>{newFriends}</div>
      </div>
    </nav>
  );
};
export default Navbar;
