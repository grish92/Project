import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getPosts, getUser } from "../../Redux/Reducer/usersReducer";
import { SelectedUserApiContainer } from "./SelectedUserApiComponent";

let mapStateToProps = (state) => {
  return {
    profile: state.usersList.profile,
    posts: state.usersList.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userId) => {
      dispatch(getUser(userId));
    },
    getPosts: (userId) => {
      dispatch(getPosts(userId));
    },
  };
};
let WithRouterComponentContainer = withRouter(SelectedUserApiContainer);
export const SelectedUserContainerUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouterComponentContainer);
