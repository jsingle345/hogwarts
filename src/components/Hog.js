import React, { Component } from 'react';

class Hog extends Component {
   

    render() { 
       const { name, specialty, greased, weight } = this.props
    return (
        <div>
          <h1>{ name }</h1>
          <h2>{ specialty }</h2>
          <p>{ greased }</p>  
          <span>weight: {weight}</span>
        </div>
        
    )
    }
}
 
export default Hog;


