import { connect } from "react-redux";
import {
  getUsers,
  followSuccess,
  sendMessageAC,
} from "../../Redux/Reducer/usersReducer";
import { UsersApiComponent } from "./UsersApiComponent";

let mapStateToProps = (state) => {
  return {
    users: state.usersList.users,
    isFetching: state.usersList.isFetching,
    pageSize: state.usersList.pageSize,
    totalUsersCount: state.usersList.totalUsersCount,
    currentPage: state.usersList.currentPage,
    followingInProgress: state.usersList.followingInProgress,
    following: state.usersList.followedList,
    dialogs: state.usersList.sendMessage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followSuccess(userId));
    },
    sendMessage: (userId) => {
      dispatch(sendMessageAC(userId));
    },

    getUsers: (currentPage) => {
      dispatch(getUsers(currentPage));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);
