//import React from 'react'
//import RouterPractise from './practise/RouterPractise'
////import HookExample from './HookExample'
//import ClassComponentsPractice from './ClassComponentsPractice';
//import StateComponentPractise from './StateComponentPractise';
//import UserContext from './UserContex';
import ClassLifeComponentExample from './ClassLifeComponentExample';

function App() {

  const student = {
    name:"Suresh" ,
    age : 24,
    address: "chennai"
  }

  return (
    <div>
    
    
      {/*<FunctionComponents />*/}
       {/* <RouterPractise /> */}
      {/*ClassComponent />*/}
      {/* <HookExample /> */}
      {/* <h1>hellow</h1> */}
      {/* <ClassComponentsPractice student = {student} /> */}
      {/* <StateComponentPractise /> */}
       {/*<UserContext.Provider value={student}>

       </UserContext.Provider> </UserContext>*/}

       <ClassLifeComponentExample />

        
    
    </div>
    
   
  );
}

export default App
