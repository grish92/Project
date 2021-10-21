import React from "react";

export const SelectedUserPosts = (props) => {
  return (
    <div>
      <div>USER`S POSTS</div>
      <div>
        {props.posts.map((e) => {
          return (
            <div key={e.id}>
              <div>
                <h2>{e.title}</h2>
              </div>
              <div>
                <h3> {e.body}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
