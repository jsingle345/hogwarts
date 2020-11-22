import React, { Component } from 'react'

export default class HogTile extends Component {
    constructor(){
        super()

        this.state = {
            showDetails: false
        }
    }
   
    renderImage = () => {
        let photo = this.props.pig.name.toLocaleLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${photo}.jpg`)

        return <img src={pigImage} width={'250px'} height={'250px'} alt='Pigs in a blanket'/>
    }

    renderDetails = () => {
        const { specialty, weight, 'highest medal achieved':medal } = this.props.pig
        return (
            <div> 
                <p>Specialty: { specialty }</p>
                <p>Weight: { weight }</p>
                <p>Highest Medal Achieved: { medal } </p>
            </div>
            
        )
    }

    toggleDetails = () => {
        this.setState( prevState => {
            return {
               showDetails: !prevState.showDetails 
            }
        })
    }
  
    render() {
        const { name } = this.props.pig

        return (
            <div className="ui seven wide column pigTile">
                    <h3>{ name }</h3>
                    { this.renderImage()}
                    < button onClick={this.toggleDetails}> Toggle Details </button>
                    < button onClick={()=>this.props.hideHog(name)}> Hide Hog </button>
                    { this.state.showDetails ? this.renderDetails() : null}
            </div>
        )
    }
}