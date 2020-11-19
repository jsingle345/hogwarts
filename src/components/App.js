import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import images from "../hog-imgs/babe.jpg"
import HelloWorld from "./HelloWorld";


class App extends Component {
  constructor() {
    super()

    this.state = {
      images: '',
      hogs: hogs
    }
  }


  render() {
    return (
      
      <div className="App">
        <Nav />
        <HelloWorld {...this.state }/>
      </div>
    );
  }
}

export default App;
