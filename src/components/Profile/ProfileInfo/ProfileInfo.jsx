import React, { useState } from "react";
import classes from './ProfilePage.module.css'

export const ProfileInfo = (props) => {
  const [editModeName, setEditModeName] = useState(false);
  const [editModeSurname, setEditModeSurname] = useState(false);
  const [editModeEmail, setEditModeEmail] = useState(false);
  const [editModePhone, setEditModePhone] = useState(false);
  const [editModeLocation, setEditModeLocation] = useState(false);
  const [name, setName] = useState("enter name");
  const [surname, setSurname] = useState("enter surname");
  const [email, setEmail] = useState("enter email");
  const [phone, setPhone] = useState("enter Phone Number");
  const [location, setLocation] = useState("enter country/city");

  const activateModeName = () => {
    setEditModeName(true);
  };
  const deActivateModeName = () => {
    setEditModeName(false);
  };
  const activateModeSurname = () => {
    setEditModeSurname(true);
  };
  const deActivateModeSurname = () => {
    setEditModeSurname(false);
  };
  const activateModeEmail = () => {
    setEditModeEmail(true);
  };
  const deActivateModeEmail = () => {
    setEditModeEmail(false);
  };
  const activateModePhone = () => {
    setEditModePhone(true);
  };
  const deActivateModePhone = () => {
    setEditModePhone(false);
  };
  const activateModeLocation = () => {
    setEditModeLocation(true);
  };
  const deActivateModeLocation = () => {
    setEditModeLocation(false);
  };
  return (
    <div  >
      {editModeName && (
        <div>
          <input
          
            autoFocus={true}
            onBlur={deActivateModeName}
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"enter name"}
          />
        </div>
      )}
      {!editModeName && (
        <div>
          <span onDoubleClick={activateModeName}>Name: {name}</span>
        </div>
      )}

      <div>
        {editModeSurname && (
          <div>
            <input
            
              autoFocus={true}
              onBlur={deActivateModeSurname}
              type={"text"}
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
          </div>
        )}
        {!editModeSurname && (
          <div>
            <span onDoubleClick={activateModeSurname}>Surname: {surname}</span>
          </div>
        )}
      </div>
      <div>
        {editModeEmail && (
          <div>
            <input
            
              autoFocus={true}
              onBlur={deActivateModeEmail}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        )}
        {!editModeEmail && (
          <div>
            <span onDoubleClick={activateModeEmail}>Email:{email}</span>
          </div>
        )}
      </div>
      <div>
        {editModeLocation && (
          <div>
            <input
            
              autoFocus={true}
              onBlur={deActivateModeLocation}
              type={"text"}
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
        )}
        {!editModeLocation && (
          <div>
            <span onDoubleClick={activateModeLocation}>Location(country/city):{location}</span>
          </div>
        )}
      </div>
      <div>
        {editModePhone && (
          <div>
            <input
            
              autoFocus={true}
              onBlur={deActivateModePhone}
              type={"number"}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
        )}
        {!editModePhone && (
          <div>
            <span onDoubleClick={activateModePhone}>PhoneNumber:{phone}</span>
          </div>
        )}
      </div>
    </div>
  );
};
