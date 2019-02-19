import React, { Component } from "react";
import "./App.css";
import MenuAppBar from "./components/AppBar/MenuAppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
      </div>
    );
  }
}

export default App;
