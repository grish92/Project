import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Messages } from "./Messages/Messages";
import { addMessageCreator, updateNewMessageCreator } from "../../Redux/Reducer/dialogsReducer";

export const Dialogs = (props) => {
  
  console.log(props);
  let dialogsElement = props.state.dialogs.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  let messagesElement = props.state.dialogs.messages.map((message) => (
    <Messages key={message.id} message={message.message} />
  ));
  let newMessageBody = props.state.newMessageBody;
  console.log(newMessageBody);
  let onSendMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onChangeMessage = (e) => {
    let body = e.target.value;
    console.log(body);
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <div>
          <textarea
            
            value={newMessageBody}
            onChange={onChangeMessage}
            placeholder="enter message"
          ></textarea>
          <button onClick={onSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
