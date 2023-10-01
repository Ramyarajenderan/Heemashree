import React, { Component } from 'react'

class ControllComponentExample extends Component {

    constructor(props){
        super(props)  
    }
  render() {

    var student = new Boolean();
    if(this.props.username == "Student"){
        student = true;
    }else if(this.props.username == "Staff"){
        student = false;
    }
    return (
      <div>
        <h1>ControllComponentExample</h1>
        {student ? <h2>Welcome</h2> : <h2>Student Details</h2>}
        
      </div>
    )
  }
}

export default ControllComponentExample
