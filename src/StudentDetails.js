import React, { Component } from 'react'

class StudentDetails extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            attendenceCount : 0,
            studentOne :0
        }
        this.ipdateAttendence = this.updateAttendence.bind(this);
        this.updateStudentOneAttendence = this.updateStudentOneAttendence.bind(this);
    }

    updateAttendence(){
        this.setState({
            attendenceCount : this.state.attendenceCount + 1
        })
    }

    updateStudentOneAttendence(){
        this.setState({
            showOrHideUpdate = this.state.studentOne + 1
        })
    
    }
    render(){
        var showOrHideUpdate = false;
        if(this.props.userName == "Student"){
            showOrHideUpdate = false;
        }else if(this.props.userName == "Staff"){
            showOrHideUpdate = true;
        }else {
            showOrHideUpdate = false;
        }
    }
    return (
        <div>
            <h1></h1>
        </div>      
    
    )
  }
}

export default StudentDetails
