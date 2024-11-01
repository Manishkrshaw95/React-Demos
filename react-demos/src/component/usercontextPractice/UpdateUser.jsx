import React, { useContext, useState } from 'react'
import {UserContext} from './UserContext';

const UpdateUser = () => {
    const {updateUser } = useContext(UserContext);
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newName.trim()) {
            updateUser(newName);
            setName('');
        }
    };
    

  return (
    <div>
        <h1>Update user name here:</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter New Name"
            />
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser