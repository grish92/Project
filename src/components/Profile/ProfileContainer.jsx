import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser, setUserProfileAC } from "../../Redux/Reducer/profileReducer";
import { ProfileContainerAPI } from "./ProfileContainerAPI";

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUser:(userId)=>{
      dispatch(getUser(userId))
    }
  };
};
let WithRouterComponentContainer = withRouter(ProfileContainerAPI);
export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouterComponentContainer);
