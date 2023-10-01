import React, { Component } from 'react'

class StateComponentPractise extends Component {

    constructor(props){
        super(props);
        this.state ={
            count  : 10,
            msg : "State"
        }
    }
    updateCount(){
        this.setState({
            count : this.state.count + 5
        })
        
    }

    updateMsg(){
        this.setState({
            msg : "Welcome" 
        })
    }

  render() {
    return (
      <div>
        <h1>StateComponentPractise</h1>
        <h2>Count : {this.state.count}</h2>
        <h2>msg : {this.state.msg}</h2>
        <button onClick={this.updateCount.bind(this)}>Increment</button>
        <button onClick={this.updateMsg.bind(this)}>Updatemsg</button>
      </div>
    )
  }
}

export default StateComponentPractise
