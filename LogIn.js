import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import './LogIn.css';

const LogIn = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [CurrentUser, setCurrentUser] = useState('');
    useEffect(() => {
        Axios.get("http://localhost:5000/getUser").then((res) => setData(res.data));
      }, []);
    const logIn = () => {
         for (let  user of data) {
            if(user.UserName === name && user.UserPassword === password){
                console.log("correct")
                //setCurrentUser(user); 
            }
        }
    };
  return (
    <div className='forms'>
      <h1>Log In</h1>
      <form>
        <div>
          <input placeholder='Name' onInput={e => setName(e.target.value)} />
        </div>
        <div>
          <input placeholder='Password' onInput={e => setPassword(e.target.value)} />
        </div>
        <button onSubmit={logIn()} >Log In</button>
      </form>
    </div>
  )
}

export default LogIn
