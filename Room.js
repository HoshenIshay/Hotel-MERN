import React from 'react' ;
import './Room.css';
import { useState , useEffect } from "react";
import Axios from "axios";

const Room = ({ roomNumber1, capacity1, availability1 , id}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }, []);

    const [roomNumber, setroomNumber] = useState(roomNumber1);
    const [capacity, setCapacity] = useState(capacity1);
    const [availability, setAvailability] = useState(availability1);
  return (
    <div>
    <div className='rooms'>
    <p>Room Number: {roomNumber}</p>
    <p>Capacity: {capacity}</p>
    <div>
      <p>Availability: {availability.toString()}</p>
     <p className={ (availability ? 'availability' : 'notAvailable')}></p> 
    </div>
    </div> 

  </div>
  )
}

export default Room