import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateRoom from './CreateRoom';
import Sms from './Sms';
import LogIn from './LogIn';
import AllRooms from './AllRooms';
import Availability from './Availability';
import CouplesRooms from './CouplesRooms';
import FamiliesRooms from './FamiliesRooms';
import Registration from './Registration';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }, []);

  return (
     <div className="App">
         <Router>
         <h5>Hi : </h5>
    <nav>
      <Link className='link' to="/"> All Rooms </Link>
      <Link className='link' to="/Availability"> Availability Rooms </Link>
      <Link className='link' to="/CouplesRooms"> Couples Rooms </Link>
      <Link className='link' to="/FamiliesRooms"> Families Rooms </Link>
      <Link className='link' to="/Sms"> Send SMS </Link>
      <Link className='link' to="/CreateRoom"> Create Room </Link>
      <Link className='link' to="/LogIn"> Log In</Link>
      <Link className='link' to="/Registration"> Registration </Link>
    </nav>
    <Routes>
      <Route path="/" element={<AllRooms/>} />
      <Route path="/Availability" element={<Availability/>} />
      <Route path="/CouplesRooms" element={<CouplesRooms/>} />
      <Route path="/FamiliesRooms" element={<FamiliesRooms/>} />
      <Route path="/CreateRoom" element={<CreateRoom/>} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Sms" element={<Sms />} />
    </Routes>
  </Router>
    </div>

  );
}

export default App;
