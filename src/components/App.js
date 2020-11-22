import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogContainer from "./HogContainer"

class App extends Component {

  constructor(){
    super()

    const updatedHogs = hogs.map(h => {
      return {
        ...h,
      hidden: false
      } 
    })

    this.state = {
      pigs: updatedHogs,
      showGreased: false, 
      sortBy: ""
    }
  }

  toggleGreased = () => {
    this.setState(prevState =>  ({showGreased: !prevState.showGreased}))
  }

  findHogs = () => {
    let updatedHogs = [...this.state.pigs].filter(hogObj => !hogObj.hidden)
    if (this.state.showGreased){
     updatedHogs = this.state.pigs.filter(hogsObj => hogsObj.greased)
    } 
    if (this.state.sortBy === "weight") {
      updatedHogs.sort(function(pigA, pigB){
        return pigA.weight - pigB.weight;
      }) 
    } else if (this.state.sortBy === "name") {
      updatedHogs.sort(function (pigA, pigB){
        let nameA = pigA.name.toUpperCase()
        let nameB = pigB.name.toUpperCase()
        if(nameA < nameB){
          return -1
        }
        if(nameA < nameB){
          return 1
        }
      })
    }
     
    
    return updatedHogs
  }

  handleSort = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  hideHog = (name) => {
    const updatedHogs = this.state.pigs.map(hogObj => {
      if(hogObj.name === name){
        return {
          ...hogObj, 
          hidden: true
        }
       } else {
          return hogObj
        }
      }
    )
    this.setState({
      pigs: updatedHogs
    })
  }

  render() {
    const hogsToShow = this.findHogs()
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased}
          handleSort = {this.handleSort}/>
        <HogContainer hogs= { hogsToShow } 
        hideHog = {this.hideHog}/>
      </div>
    );
  }
}

export default App;
