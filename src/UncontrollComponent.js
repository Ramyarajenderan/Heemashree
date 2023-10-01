import React, { Component } from 'react'

class UncontrollComponent extends Component {

    constructor(props){
        super(props)

        this.refs = React.createRef();
        this.formSubmit = this.formSubmit.bind(this)
    }

    formSubmit(event){
        console.log(this.refs.firstName.value)
        console.log(this.refs.lastName.value)
        console.log(this.refs.age.value)
        console.log(this.refs.gender.value)
        console.log(this.refs.phonenumber.value)
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <h1>UncontrollComponent</h1>
        <form>
            <div>
                <label>First Name : </label>
                <input type="text" id="firstName" ref="firstName"/>
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" id="lastName" ref="lastName"/>
            </div>
            <div>
                <label>age: </label>
                <input type="text" id="age" ref="age"/>
            </div>
            <div>
                <label>Gender: </label>
                <input type="text" id="gender" ref="gender"/>
            </div>
            <div>
                <label>Phone Number : </label>
                <input type="text" id="phonenumber" ref="phonenumber"/>
            </div>
            <button onClick={this.formSubmit}>Submit</button>
            
            
        </form>

      </div>
    )
  }
}

export default UncontrollComponent
