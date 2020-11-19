import React, { Component } from "react";
import Hog from "./Hog"
// import { v4 as uuidv4 } from 'uuid'


// uuidv4();

class HelloWorld extends Component {
  
  

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        {
        this.props.hogs.map((hog, index) => {
          return <Hog {...hog} key={index} displayDes={this.handleClick}
          />

        })
        }
      </div>
    );
  }
}

export default HelloWorld;

