import React, { Component } from 'react'
import imgOne from './assets/img6.jpg'

class ClassComponent extends Component {
  render() {
    return (
      <div >
        <h1>Name: Ramesh</h1>
        <h1>Age: 24</h1>
        <h1>Course: Fullstack</h1>
        <img src={imgOne}></img>
      </div>
    )
  }
}

export default ClassComponent
