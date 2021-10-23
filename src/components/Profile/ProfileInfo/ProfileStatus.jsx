import React, { useState } from "react";
import classes from "./ProfilePage.module.css";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("");

  const activateMode = () => {
    setEditMode(true);
  };
  const deActivateMode = () => {
    setEditMode(false);
  };
  return (
    <div>
      {!editMode && (
        <div className={classes.status}>
          <span onDoubleClick={activateMode}>
            Status: <strong>{status} </strong>
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={classes.status}
            autoFocus={true}
            onBlur={deActivateMode}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
