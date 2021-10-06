import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { Users } from "./components/Users/Users";
import { UsersContainer } from "./components/Users/usersContainer";

const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <Header />
        <NavbarContainer />
        <div className="App_wrapper_content">
          <Route
            path="/profile"
            render={() => (
              <Profile/>
            )}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/music" component={Music} />
          <Route path='/users' render={()=><UsersContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
