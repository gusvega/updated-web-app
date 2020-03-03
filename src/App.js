import React, { Component } from "react";
import "./App.css";
import MenuAppBar from "./components/AppBar/MenuAppBar";
import { Button } from "@material-ui/core";
import Body from "./components/Body/Body";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <MenuAppBar/>
        </div>
        <body class='body'>
          <Button>Testing</Button>
          <Body></Body>
        </body>
        <footer class='footer'>
          <p class='copy_right'>Designed and Developed by Gus Vega</p>
        </footer>
      </div>
    );
  }
}

export default App;
