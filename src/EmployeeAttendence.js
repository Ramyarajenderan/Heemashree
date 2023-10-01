import React, { Component } from 'react'

class EmployeeAttendence extends Component {
    constructor(props){
        super(props);
        this.state ={
            employees[
                {id: 1,name: 'Employee 1',status: 'Absent'},
                {id: 2,name: 'Employee 2',status: 'Absent'},
                {id: 3,name: 'Employee 3',status: 'Absent'},
            ]
        }
    }

    toggleAttendence = (id) => {
        this.setState((prevState)=> ({
            employees: prevState.employees.map((employee) =>
            employee.id===id
            ?{
                ...employee,
                status: employee.status ==='Absent' ? 'Present':'Absent',
                
            }
            :employee
            ),
        })
        )
    }
  render() {
    const
    return (
      <div>
        
      </div>
    )
  }
}

export default EmployeeAttendence
