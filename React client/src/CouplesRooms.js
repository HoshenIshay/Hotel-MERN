import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import Couples from './Couples';

function CouplesRooms() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
      }, []);
  return (
    <div>
      <h1>Couples Rooms</h1>
        {data.map((value) => (
        <Couples key={value._id}
        roomNumber1={value.roomNumber}
        capacity1={value.capacity}
        availability1={value.availability}
        id={value._id}
         />
        ))}
       </div>
  )
}

export default CouplesRooms