import React, { useContext } from 'react'
import { navContext } from '../context/Context'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {

  var context = useContext(navContext);
  var [username, setUsername] = useState('');
  var [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    var res = context.login(username,password)
    if (res) navigate('/');
  }

  return (
    <div className='login'>
      <div className="container">
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="">username</label>
          <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
        </div>
        <div className="input">
          <label htmlFor="">password</label>
          <input type="text" onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  )
}

export default LoginPage