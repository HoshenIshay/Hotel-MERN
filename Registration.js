import React from 'react';
import { useState } from "react";
import Axios from "axios";
import './Registration.css';

function Registration() {
    const [UserName, setUserName] = useState(null);
    const [UserPassword, setUserPassword] = useState(null);
    const [UserType, setUserType] = useState(null);

    const postData = () => {
        const data = {
            UserName: UserName,
            UserPassword: UserPassword,
            UserType: UserType,
        };
        Axios.post("http://localhost:5000/createUser", data).then((res) => {
          // window.location.reload();
        });
      };
  return (
    <div className='forms'>
    <h1>Registration</h1>
  <p>
  <input placeholder='Name' value={UserName} onChange={(e) => setUserName(e.target.value)} />
  </p>
  <p>
  <input placeholder='Password' value={UserPassword} onChange={(e) => setUserPassword(e.target.value)} />
  </p>
  <p>
  <input placeholder='Type' value={UserType} onChange={(e) => setUserType(e.target.value)} />
  </p>
  <button onClick={() => postData()}>Registration</button>
</div>
  )
}

export default Registration