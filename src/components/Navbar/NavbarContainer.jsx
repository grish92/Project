import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    sideBarPages: state.sideBar.sideBarPages,
    friends: state.sideBar.friends,
  };
};

export const NavbarContainer = connect(mapStateToProps)(Navbar);
