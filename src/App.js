import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="App_wrapper">
      <Header />
      <Navbar />
      <div className='App_wrapper_content'>
        {/* <Profile /> */}
      <Dialogs/>
      </div>
      
    </div>
  );
};

export default App;
