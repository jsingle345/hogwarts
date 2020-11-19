import React, { Component } from 'react';

class Hog extends Component {
   


    render() { 
       const { name, specialty, greased, weight } = this.props
       let snake =  name.split(' ').join('_').toLowerCase()
       let pigImage = require(`../hog-imgs/${snake}.jpg`)
       
    return (
        <div className="pigTile">
          <img src={pigImage} />
          <h1>{name}</h1>
          {/* <h2>{ specialty }</h2>
          <h3>{ greased }</h3>  
          <span>weight: {weight}</span> */}
        </div>
        
    )
    }
}
 
export default Hog;


