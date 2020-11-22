import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <label className="filter">
                    Show Greased:  
                    <input 
                        name="greased"
                        type="checkbox"
                        onChange={this.props.toggleGreased}
                    />
                </label>
                <label className="filter">
                    Sort By:   
                    <select onChange={(event) => this.props.handleSort(event)}>
                       <option value="" > </option> 
                       <option value="weight" >Weight</option>
                       <option value="name" >Name</option> 
                    </select>
                    
                </label>
            </div>
        )
    }
}
