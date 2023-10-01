import React from "react";

const UserContext = React.createContext({
    name : null,
    address : null,
    age : null
})

export default UserContext;