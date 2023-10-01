import React, { Component } from 'react'

class ClassComponentsPractice extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <h1>ClassComponentsPractice</h1>
        
        <h2>FirstName :{this.props.student.firstName}</h2>
        <h2>Age:{this.props.student.age}</h2>
        <h2>Address :{this.props.student.address}</h2>

      </div>
    )
  }
}

export default ClassComponentsPractice
