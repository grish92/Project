import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/Reducer/profileReducer";


let mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.profile.posts,
    newPostText:state.profile.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


