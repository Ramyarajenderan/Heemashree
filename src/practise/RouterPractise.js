import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Address from './Address'
import imgone from '../assets/img6.jpg'

class RouterPractise extends Component {
    render() {
        return (
            <div>
                <Router>
                    <img src={imgone} />
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/address">Address</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/contact' element={<Contact />}></Route> 
                        <Route path='/address ' element={<Address />} ></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default RouterPractise
