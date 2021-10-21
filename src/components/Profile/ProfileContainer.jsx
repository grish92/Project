import { connect } from "react-redux";
import { ProfileContainerAPI } from "./ProfileContainerAPI";

let mapStateToProps = (state) => {
  return {
   
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
   addName:(text)=>{
     
   }
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainerAPI);
