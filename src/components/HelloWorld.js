import React, { Component } from "react";
import Hog from "./Hog"
import { v4 as uuidv4 } from 'uuid'


uuidv4();

class HelloWorld extends Component {

  // hogs.map(hog => {
  //   <Hog />
  // })

  render() {

    const { name, specialty, greased, weight } = this.props

    return (
      <div>
        <h1>Hello World</h1>

        {this.props.hogs.map(hog => {
         
          return <Hog {...hog}/>
        })
        }
      </div>
    );
  }
}

export default HelloWorld;

