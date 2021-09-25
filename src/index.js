import state, { subscribe } from "./Redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/state";

export let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
