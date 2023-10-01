import React, { Component } from 'react'

class ClassLifeComponentExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillMount() {
        alert("Component Loading Started....")
    }
    render() {
        return (
            <div>
                <h1>Component LifeCycle Example</h1>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.updateState}>Increment</button>
            </div>
        )
    }

    componentDidMount() {
        alert("Component Loading completed")
    }
    shouldComponentUpdate() {
        return true
    }
    componentWillUpdate() {
        alert("Updating Started.....")
    }
    componentDidUpdate() {
        alert("Updating Completed")
    }
    componentWillUnmount() {
        alert("Component Destroyed....")
    }
}

export default ClassLifeComponentExample 
