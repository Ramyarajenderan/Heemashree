import React, { Component } from 'react'

export class ComponentLifeCycleMethods extends Component {

    componentWillUnmount(){
        alert("Component Loading started....")
    }
  render() {
    return (
      <div>
          <h1>Component LifeCycle Methods</h1>
      </div>
    )
 
}
componentDidMount(){
    alert("Component Loading completed.....")
    }
}

export default ComponentLifeCycleMethods
