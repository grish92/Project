import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <Header />
        <Navbar />
        <div className="App_wrapper_content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
