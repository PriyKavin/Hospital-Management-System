import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Buttons from './Components/Buttons';
import Disclaimer from './Components/Disclaimer';
import Health from './Components/Health';
import Login from './Components/Login';
import Patientreg from './Components/Patientreg';
import Doctorlogin from './Components/Doctorlogin';
import Admin from './Components/Admin.js';

function App() {
  return (
    <>
     <div class="container">
    
    
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Header />} />
       
       <Route path="/login" element={<Login />} />
       <Route path="/patient" element={<Patientreg />} />
       <Route path="/doctor" element={<Doctorlogin />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/register" element={<Login />} />
       </Routes>
   </BrowserRouter>
   
</div>
   </>
  );
}

export default App;
