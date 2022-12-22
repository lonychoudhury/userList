import React, { useState, useEffect } from 'react';
import { updateUser } from '../../../actions/users';
import './styles.css';
import { useDispatch } from 'react-redux';
import { updateUser } from './actions/users';

const User = ({ userData }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [gender, setGender] = useState(userData.gender);
    const [editMode, setEditMode] = useState(false);
    const [buttonText, setButtonText] = useState("Edit");

    const handleSubmit= (e) => {
        e.preventDefault();
        setEditMode(!editMode);
        if(buttonText=="Edit")
          { 
            dispatch(updateUser({id:userData.id, user:{...userData,name,email,gender,status}}))
            setButtonText("Done")
          }
        else
          {
            setButtonText("Edit")
          }
      }

    return (
        <form onSubmit= {handleSubmit}  className="form">
            <div className="field">
        <label className="field">
          Name:
          <input type="text" 
            required 
            // defaultValue= {userData.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled= {!editMode}
            />
        </label>
        </div>
        <div className="field">
        <label className="field">
          Email:
          <input type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            disabled= {!editMode}/>
        </label>
        </div>
        <div className="field">
        <label className="field">
          Gender:
          <input type="text" 
            required 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            disabled= {!editMode}/>
        </label>
        </div>
        <div className="status">
            Status: {userData.status}
        </div>
        <input type="submit" value={buttonText} />
      </form>
    )
}

export default User;