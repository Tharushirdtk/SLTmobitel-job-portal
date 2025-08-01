import { useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Vacancies from './pages/Vacancies';
import ApplyForm from './pages/ApplyForm';
import AppliedJobStatus from './pages/AppliedJobStatus';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import UserRegistration from './pages/UserRegistration';
import AdminRegistration from './pages/AdminRegistration';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'


function App() {
  

  return (
    
    <BrowserRouter>
      
      <Routes path="/*">
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<AboutUs/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/vacancies" element={<Vacancies/>} />
         <Route path="/apply" element={<ApplyForm/>} />
         <Route path="/jobStaus" element={<Vacancies/>}/>
         <Route path="/appliedJobStatus" element={<AppliedJobStatus/>}/>
         <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/UserRegister" element={<UserRegistration />} />
          <Route path="/AdminRegister" element={<AdminRegistration/>} />

      </Routes>
   
    </BrowserRouter>
      
    
  )
}

export default App
