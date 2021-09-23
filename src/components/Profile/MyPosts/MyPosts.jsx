import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let newPosts = props.posts.map((post) => (
    <Post message={post.message} likescount={post.likescount} key={post.id} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>{newPosts}</div>
    </div>
  );
};
