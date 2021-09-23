import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Messages } from "./Messages/Messages";

export const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };
  console.log(props);
  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  let messagesElement = props.state.messages.map((message) => (
    <Messages key={message.id} message={message.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <div>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
