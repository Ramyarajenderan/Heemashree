import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'
import ListExample from './ListExample'
import PropsExplain from './PropsExplain'

 class RouterExample extends Component {
  render() {
    return (
      <div>
        <h1>RouterExample</h1>

        <Router>

            <ul>
                <li>
                    <Link to="/">ListExample</Link>
                </li>
                <li>
                    <Link to="/PropsExample">Props Example</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/' element={ <ListExample/>}></Route>
                <Route path='/PropsExample' element={ <PropsExplain/>}></Route>
            </Routes>
        </Router>
      </div>
    )
  }
}

export default RouterExample
