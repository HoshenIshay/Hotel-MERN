import React from 'react' ;
import { useState } from "react";
import Axios from "axios";
import './CreateRoom.css';

const CreateRoom = () => {
    const [roomNumber, setroomNumber] = useState(null);
    const [capacity, setCapacity] = useState(null);
    const [availability, setAvailability] = useState(null);
  
    const postData = () => {
      const data = {
        roomNumber: roomNumber,
        capacity: capacity,
        availability: availability,
      };
      Axios.post("http://localhost:5000/create", data).then((res) => {
        // window.location.reload();
      });
    };
  return (
    <div className='forms'>
      <h1>Create Room</h1>
    <p>
    <input placeholder='Room Number' value={roomNumber} onChange={(e) => setroomNumber(e.target.value)} />
    </p>
    <p>
    <input placeholder='Capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
    </p>
    <p>
    <input placeholder='Availability' value={availability} onChange={(e) => setAvailability(e.target.value)} />
    </p>
    <button onClick={() => postData()}>Create</button>
  </div>
  )
}

export default CreateRoom