const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
  messages: [],
  newMessageBody: "",
  dialogs: [],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: "",
      };

    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageBody: action.body,
      };
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
