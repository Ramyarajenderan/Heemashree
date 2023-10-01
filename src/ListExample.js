import React, { Component } from 'react'

//  class ListExample extends Component {
//   render() {

//     const number = [35,56,87,98,45]
//     const nameList = ["Ramesh","Suresh","Dhanush","Rajesh"]
//     const stdDetailstList = [
//         {id:101, name:"Rakesh",address:"Chennai"},
//         {id:102, name:"Heema", address:"Hyderabad"},
//         {id:103, name:"Thanu",address:"Bangalore"}
//     ]

//     const itertedNumberList = number.map(num => {
//         return <li>{num}</li>
//     })
//     return (
//       <div>
//         <h1>ListExample</h1>
//         <h2>Number List</h2>
//         <ul>
//             {itertedNumberList}
//         </ul>
//       </div>
//     )
//   }
// }

// export default ListExample 

// 13-09-2023

class ListExample extends Component {
  render() {

    const number = [35,56,87,98,45]
    const nameList = ["Ramesh","Suresh","Dhanush","Rajesh"]
    const stdDetailstList = [
        {id:101, name:"Rakesh",address:"Chennai"},
        {id:102, name:"Heema", address:"Hyderabad"},
        {id:103, name:"Thanu",address:"Bangalore"}
    ]

  
    return (
      <div>
        <h1>  stdDetailstList</h1>
        <table>
          <tr><th>id</th>
          <th>name</th>
          <th>add</th>
          <th>action</th></tr>
          <tr>
            <tbody>
            {stdDetailstList.map(std => {
        return <tr>
          <td>{std.id}</td>
          <td>{std.name}</td>
          <td>{std.address}</td>
        <td><button onClick= "">delete</button></td>




        </tr>})}




            </tbody>
          </tr>
        </table>
      </div>
    )
  }
}

export default ListExample 

