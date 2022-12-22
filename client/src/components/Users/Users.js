import React, { useState, useEffect } from 'react';
import User from './User/User';
import './styles.css';
import { useSelector } from 'react-redux';


const Users= () =>
{
    const users = useSelector((state) => state.users);
    return (

        <div className="box">
            {users.map((user) => (
                <User key={user.id} userData={user}/> 
            ))}
        </div>
    )
}
export default Users;
