import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import Room from './Room';

function AllRooms() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
      }, []);
  return (

    <div>
      <div>
        <h1>All Rooms</h1>
       {data.map((value) => (
         <Room key={value._id}
           roomNumber1={value.roomNumber}
           capacity1={value.capacity}
           availability1={value.availability}
          id={value._id}
         />
       ))}
      </div>
    </div>
  )
}

export default AllRooms