import React, { useState } from "react";
import classes from "./ProfilePage.module.css";

export const ProfileInfo = (props) => {
  const [editModeName, setEditModeName] = useState(false);
  const [editModeSurname, setEditModeSurname] = useState(false);
  const [editModeEmail, setEditModeEmail] = useState(false);
  const [editModePhone, setEditModePhone] = useState(false);
  const [editModeLocation, setEditModeLocation] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

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
    <div>
      {editModeName && (
        <div>
          <input
            className={classes.name}
            autoFocus={true}
            onBlur={deActivateModeName}
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"Enter Name"}
          />
        </div>
      )}
      {!editModeName && (
        <div className={classes.name}>
          <span onDoubleClick={activateModeName}>
            Name: <strong>{name} </strong>
          </span>
        </div>
      )}

      <div>
        {editModeSurname && (
          <div>
            <input
              className={classes.surname}
              autoFocus={true}
              onBlur={deActivateModeSurname}
              type={"text"}
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              placeholder={"Enter Surame"}
            />
          </div>
        )}
        {!editModeSurname && (
          <div className={classes.surname}>
            <span onDoubleClick={activateModeSurname}>
              Surname: <strong> {surname} </strong>
            </span>
          </div>
        )}
      </div>
      <div>
        {editModeEmail && (
          <div>
            <input
              className={classes.email}
              autoFocus={true}
              onBlur={deActivateModeEmail}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={"Enter Email"}
            />
          </div>
        )}
        {!editModeEmail && (
          <div className={classes.email}>
            <span onDoubleClick={activateModeEmail}>
              Email: <strong>{email}</strong>
            </span>
          </div>
        )}
      </div>
      <div>
        {editModeLocation && (
          <div>
            <input
              className={classes.location}
              autoFocus={true}
              onBlur={deActivateModeLocation}
              type={"text"}
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              placeholder={"Enter Location(Country/City"}
            />
          </div>
        )}
        {!editModeLocation && (
          <div className={classes.location}>
            <span onDoubleClick={activateModeLocation}>
              Location(country/city): <strong>{location}</strong>
            </span>
          </div>
        )}
      </div>
      <div>
        {editModePhone && (
          <div>
            <input
              className={classes.phone}
              autoFocus={true}
              onBlur={deActivateModePhone}
              type={"number"}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder={"Enter Phone Number"}
            />
          </div>
        )}
        {!editModePhone && (
          <div className={classes.phone}>
            <span onDoubleClick={activateModePhone}>
              PhoneNumber:<strong>{phone}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
