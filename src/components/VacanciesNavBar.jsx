import React from "react";
import Logo from '../assets/SLTMobitel_Logo.svg.png';
import { Link } from "react-router-dom";



export default function VacanciesNavBar(){

    return(

        <>
     <nav className="flex items-center justify-between px-5 py-0.01 bg-white shadow-md rounded-full w-full">

      <div className="flex items-center">
  <img src={Logo} alt="logo" className="max-h-16 w-auto object-contain" />
  <span className="text-xl font-bold text-blue-900 ml-2">Training Program</span>
</div>

      
   
      <ul className="flex space-x-6 text-gray-700 font-medium">
        
        <li><Link to="/jobStaus">Job Status</Link></li>
        <li><Link to="/apply">Apply For Job</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
        </>
    )
}