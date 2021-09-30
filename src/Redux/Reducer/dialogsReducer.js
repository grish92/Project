const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState=  {
  messages: [
    { id: "1", message: "message1" },
    { id: "2", message: "message2" },
    { id: "3", message: "message3" },
  ],
  newMessageBody: "",
  dialogs: [
    { id: "1", name: "User1" },
    { id: "2", name: "User2" },
    { id: "3", name: "User3" },
    { id: "4", name: "User4" },
    { id: "5", name: "User5" },
  ],
}

export const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.length + 1,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const updateNewMessageCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE,
      body: body,
    };
  };
  export const addMessageCreator = () => {
    return {
      type: ADD_MESSAGE,
    };
  };
