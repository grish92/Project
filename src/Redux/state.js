let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "hi,how are you?", likescount: "0", id: "0" },
        { message: "my first message", likescount: "23", id: "1" },
      ],
      newPostText: "enter text",
    },
    dialogsPage: {
      messages: [
        { id: "1", message: "message1" },
        { id: "2", message: "message2" },
        { id: "3", message: "message3" },
      ],
      dialogs: [
        { id: "1", name: "User1" },
        { id: "2", name: "User2" },
        { id: "3", name: "User3" },
        { id: "4", name: "User4" },
        { id: "5", name: "User5" },
      ],
    },
    sideBar: {
      sidebarPages: [
        { id: "1", name: "Profile", to: "profile" },
        { id: "1", name: "Messages", to: "dialogs" },
        { id: "1", name: "News", to: "news" },
        { id: "1", name: "Music", to: "music" },
        { id: "1", name: "Settings", to: "settings" },
      ],
      Friends: [
        { id: 1, name: "User1" },
        { id: 2, name: "User2" },
        { id: 3, name: "User3" },
      ],
    },
  },
  _callSubscriber() {
    console.log("deleted");
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likescount: 0,
      id: this._state.profilePage.posts.length + 1,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
export default store;
