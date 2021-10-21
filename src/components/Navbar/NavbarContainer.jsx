import { connect } from "react-redux";
import { unfollowSuccess } from "../../Redux/Reducer/usersReducer";

import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    sideBarPages: state.sideBar.sideBarPages,
    following: state.usersList.followedList,
    followingInProgress: state.usersList.followingInProgress,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    unFollow: (userId) => {
      dispatch(unfollowSuccess(userId));
    },
  };
};
export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
