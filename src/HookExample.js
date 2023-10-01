import React, {useState} from 'react'

function HookExample() {

    const [name, setName] = useState('ramya');



  return (
    <div>
      <h1>Name: {name} </h1>
    </div>
  )
}

export default HookExample
