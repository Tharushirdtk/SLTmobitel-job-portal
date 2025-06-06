import Logo from '../assets/SLTMobitel_Logo.svg.png'
import { Link } from "react-router-dom";

export default function AdminNavBar(){

    return(
        <>
        <nav className="flex items-center justify-between px-5 py-0.01 bg-white shadow-md rounded-full w-full">
       
             <div className="flex items-center">
         <img src={Logo} alt="logo" className="max-h-16 w-auto object-contain" />
         <span className="text-xl font-bold text-blue-900 ml-2">Training Program</span>
       </div>
       
         <ul className="flex space-x-6 text-gray-700 font-bold">
               
               <li><Link to="/">Home</Link></li>
                <li><Link to="/adminlogin" className="text-red-600 font-bold">Logout</Link></li>
             </ul>
           </nav>
        </>
    )
}