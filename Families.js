import React from 'react';
import { useState } from "react";

function Families({ roomNumber1, capacity1, availability1 , id}) {
    const [roomNumber, setroomNumber] = useState(roomNumber1);
    const [capacity, setCapacity] = useState(capacity1);
    const [availability, setAvailability] = useState(availability1);
  return (
    <div >
{capacity > 2 ? <div className='rooms'>
<p>Room Number: {roomNumber}</p>
<p>Capacity: {capacity}</p>
<p>Availability: {availability.toString()}</p>
<p className={ (availability ? 'availability' : 'notAvailable')}></p> 
</div> : ''}
</div>
  )
}

export default Families