import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
// import images from "src/images/hog-imgs/"


class App extends Component {
  constructor() {
    super()
    // name, specialty, greased, weight
    this.state = {
      hogs: hogs,
      display: false
    }
  }
  
  handleClick = (e) => {
    const updatedHogs = this.state.hogs.map(hog =>{
      let hogId = hog.key
      if(hogId){
        return {
          ...hog, 
          display: true 
        }
      }else {
        return hog
      }
    })

    this.setState({
      hogs: updatedHogs
    })
  }
  
  hogImages = () =>{
    let {hogs} = this.state
    {
      
     let snakeName = hogs.map(hog => {
        hog.name.split(' ').toLowerCase().join('_')
      let pigImage = require(`../hog-imgs/${snakeName}.jpg`)
      return pigImage
      })
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


// let snakeName = hogs.map(hog => {
  //   hog.name.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  //   .toLowerCase().join('_')