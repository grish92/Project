import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { profileReducer } from "../../../Redux/Reducer/profileReducer";

export const MyPosts = (props) => {
  console.log(props);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let newPosts = props.posts.map((post) => (
    <Post message={post.message} likescount={post.likescount} key={post.id} />
  ));

  let PostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={PostChange}
            value={props.newPostText}
            ref={newPostElement}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>{newPosts}</div>
    </div>
  );
};
