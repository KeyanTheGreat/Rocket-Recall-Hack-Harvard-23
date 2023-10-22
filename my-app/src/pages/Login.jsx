import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        console.log(token);
        console.log(username);
        console.log(password);
      }
      //may not be able to get object from this, but can get username and password needed for an object
      //Create user object with fields username, password, etc?
      

    return(
      <div className="login-wrapper login_container">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
            <div style={{paddingBottom: 'px'}}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          </div>
          <div style={{paddingTop: '10px'}}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
