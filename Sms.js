import React from 'react';
import Axios from "axios";
import { useState } from "react";
import './Sms.css';

function Sms() {
      const sendSms = () => {
        Axios.get("http://localhost:5000/sendSMS").then((res) => {
          console.log("send SMS")
          // window.location.reload();
        });
      };
      const [phonNumbe, setPhonNumbe] = useState(null);
  return (
    <div className='forms'>
      <h1>Send SMS</h1>
    <p>
    <input placeholder='Phone Number' value={phonNumbe} onChange={(e) => setPhonNumbe(e.target.value)} />
    </p>
    <button onClick={() => sendSms()}> Send Me SMS </button>
  </div>
  )
}

export default Sms