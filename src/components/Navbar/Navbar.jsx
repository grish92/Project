import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.navActiv}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.navActiv}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='news' activeClassName={classes.navActiv}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.navActiv}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.navActiv}>Settings</NavLink>
      </div>
    </nav>
  );
};
