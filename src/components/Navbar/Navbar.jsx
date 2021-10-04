import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  console.log(props);
  let newSideBar = props.sideBarPages.map((el) => {
    return (
      <div className={classes.item}>
        <NavLink to={el.to} key={el.id} activeClassName={classes.navActiv}>
          {el.name}
        </NavLink>
      </div>
    );
  });

  let newFriends = props.friends.map((el) => {
    return (
      <div key={el.id} className={classes.friend}>
        <img src="https://www.canon-emirates.ae/media/quality-photo-240_tcm209-1178372.png" />
        {el.name}
      </div>
    );
  });
  return (
    <nav className={classes.nav}>
      {newSideBar}
      <div>
        <h3>Friends</h3>
        <div>{newFriends}</div>
      </div>
    </nav>
  );
};
export default Navbar
