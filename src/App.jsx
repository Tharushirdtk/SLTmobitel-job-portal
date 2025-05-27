import { useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Vacancies from './pages/Vacancies';
import ApplyForm from './pages/ApplyForm';
import AppliedJobStatus from './pages/AppliedJobStatus';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'


function App() {
  

  return (
    
    <BrowserRouter>
      
      <Routes path="/*">
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<AboutUs/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Registration />} />
         <Route path="/vacancies" element={<Vacancies/>} />
         <Route path="/apply" element={<ApplyForm/>} />
         <Route path="/jobStaus" element={<Vacancies/>}/>
         <Route path="/appliedJobStatus" element={<AppliedJobStatus/>}/>
      </Routes>
   
    </BrowserRouter>
      
    
  )
}

export default App
