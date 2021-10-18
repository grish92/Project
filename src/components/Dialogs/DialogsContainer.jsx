import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../Redux/Reducer/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    dialogList: state.dialogs.dialogs,
    messageList: state.dialogs.messages,
    newMessageBody: state.dialogs.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(addMessageCreator());
    },
    onChangeMessage: (body) => {
      dispatch(updateNewMessageCreator(body));
    },
  };
};

export let DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
