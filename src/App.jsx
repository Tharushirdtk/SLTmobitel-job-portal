import { useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'


function App() {
  

  return (
    
    <BrowserRouter>
      
      <Routes path="/*">
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<AboutUs/>} />
         <Route path="/login" element={<Login />} />
      </Routes>
   
    </BrowserRouter>
      
    
  )
}

export default App
