// import { dialogsReducer } from "./Reducer/dialogsReducer";
// import { profileReducer } from "./Reducer/profileReducer";
// import { sideBarReducer } from "./Reducer/sideBarReducer";



// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { message: "hi,how are you?", likescount: "0", id: "0" },
//         { message: "my first message", likescount: "23", id: "1" },
//       ],
//       newPostText: "enter text",
//     },
//     dialogsPage: {
//       messages: [
//         { id: "1", message: "message1" },
//         { id: "2", message: "message2" },
//         { id: "3", message: "message3" },
//       ],
//       newMessageBody: "",
//       dialogs: [
//         { id: "1", name: "User1" },
//         { id: "2", name: "User2" },
//         { id: "3", name: "User3" },
//         { id: "4", name: "User4" },
//         { id: "5", name: "User5" },
//       ],
//     },
//     sideBar: {
//       sidebarPages: [
//         { id: "1", name: "Profile", to: "profile" },
//         { id: "1", name: "Messages", to: "dialogs" },
//         { id: "1", name: "News", to: "news" },
//         { id: "1", name: "Music", to: "music" },
//         { id: "1", name: "Settings", to: "settings" },
//       ],
//       Friends: [
//         { id: 1, name: "User1" },
//         { id: 2, name: "User2" },
//         { id: 3, name: "User3" },
//       ],
//     },
//   },
//   _callSubscriber() {
//     console.log("deleted");
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage=profileReducer(this._state.profilePage,action)
//     this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
//     this._state.sideBar=sideBarReducer(this._state.side_bar,action)

//     this._callSubscriber(this._state)
//   },
// };




// export default store;
