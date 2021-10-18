import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer, ProfileContainerUI } from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <Header />
        <NavbarContainer />
        <div className="App_wrapper_content">
          <Route exact path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/music" component={Music} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
