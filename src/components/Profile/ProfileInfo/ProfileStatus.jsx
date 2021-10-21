import React, { useState } from "react";
import classes from "./ProfilePage.module.css";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("enter Status");

  const activateMode = () => {
    setEditMode(true);
  };
  const deActivateMode = () => {
    setEditMode(false);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>Status:{status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
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
