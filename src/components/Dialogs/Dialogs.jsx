import React from "react";
import classes from "./Dialogs.module.css";

export const Dialogs = (props) => {
  return (
      
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={classes.dialog}>User1</div>
        <div className={classes.dialog}>User2</div>
        <div className={classes.dialog}>User3</div>
        <div className={classes.dialog}>User4</div>
        <div className={classes.dialog}>User5</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>message1</div>
        <div className={classes.message}>message2</div>
        <div className={classes.message}>message3</div>
      </div>
    </div>
  );
};
