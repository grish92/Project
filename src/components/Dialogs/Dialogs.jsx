import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Messages } from "./Messages/Messages";



export const Dialogs = (props) => {
  
  console.log(props);
  let dialogsElement = props.dialogList.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  let messagesElement = props.messageList.map((message) => (
    <Messages key={message.id} message={message.message} />
  ));
  let newMessageBody = props.newMessageBody;
  console.log(newMessageBody);


  let SendMessage = () => {
    props.onSendMessage()
  };

  let ChangeMessage = (e) => {
    let body = e.target.value;
   props.onChangeMessage(body)
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <div>
          <textarea
            
            value={newMessageBody}
            onChange={ChangeMessage}
            placeholder="enter message"
          ></textarea>
          <button onClick={SendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
