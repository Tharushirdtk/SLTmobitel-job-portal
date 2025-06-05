import React from "react";
import Logo from '../assets/SLTMobitel_Logo.svg.png'
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(){
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
     
        localStorage.removeItem('user');
       
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-5 py-0.01 bg-white shadow-md rounded-full w-full">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="max-h-16 w-auto object-contain" />
          <span className="text-xl font-bold text-blue-900 ml-2">Training Program</span>
        </div>

        <ul className="flex space-x-6 text-gray-700 font-bold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/vacancies">Vacancies</Link></li>
          <li>
            <button 
              onClick={handleLogout}
              className="text-red-600 font-bold hover:text-red-800"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}