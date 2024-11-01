import React, { createContext, useState } from 'react'

//save the createcontext inside a variable
const UserContext = createContext();

//create a provider which will help to pass on the value
const UserProvider = ({children}) => {
    const [user, setUser]= useState({name: "Jhon Wick"});

    const updateUser =(newName) => {
        setUser({name: newName});
    };

  return (
    <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
  );
};


export default { UserContext, UserProvider };