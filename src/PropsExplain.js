import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import ImgSix from './assets/img6.jpg'
import './PropsExplain.css'

 class PropsExplain extends Component {
  render() {
    const {name,age,country} = this.props;

    return (
      <div className='PropsExplain'>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <img src={ImgSix}></img>
      </div>
    )
  }
}
PropsExplain.PropsTypes ={
    name: PropsTypes.string,
    age: PropsTypes.number,
    country: PropsTypes.string,
};

export default PropsExplain;
