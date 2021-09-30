const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState= {
  posts: [
    { message: "hi,how are you?", likescount: "0", id: "0" },
    { message: "my first message", likescount: "23", id: "1" },
  ],
  newPostText: "enter text",
}

export const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likescount: 0,
        id: state.posts.length + 1,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};


export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    };
  };
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    };
  };
