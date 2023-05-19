import React from 'react'
import { useContext } from 'react';
import { navContext } from '../context/Context';

const Profile = ({hidden}) => {

  var context = useContext(navContext);

  return (
    <div className='profile' style={{display: hidden? "none": ""}}>
        <h1>User Profile</h1>
        <p>User Fields like Name, Email, Password...</p>
        <div className="fields">
          <h2>Username</h2>
          <input type="text" value={context.user.username} disabled/>
        </div>
        <div className="fields">
          <h2>Password</h2>
          <input type="text" value={context.user.password} disabled />
        </div>

        <button className='btn'>Log Out</button>
    </div>
  )
}

export default Profile