
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  const linkClass = ({ isActive }) =>
    `block py-2 px-4 rounded hover:bg-blue-700 ${isActive ? 'bg-blue-900' : ''}`;

  return (
    <div className="bg-blue-800 text-white w-64 h-screen p-4 fixed">
      <div className='bg-blue-950 w-full p-0'><h2 className="text-lg font-bold mb-6">Admin Menu</h2></div>
      <nav className="space-y-12">
        <NavLink to="/admin/job-creation" className={linkClass}>Job Creation</NavLink>
        <NavLink to="/admin/job-modification" className={linkClass}>Job Modification</NavLink>
        <NavLink to="/admin/received-cvs" className={linkClass}>Received CVs</NavLink>
        <NavLink to="/admin/accepted-cvs" className={linkClass}>Accepted CVs</NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
