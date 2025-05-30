import React from "react";
import { Link } from "react-router-dom";

export default function Card(props){

     return (
         <div className="bg-white p-5 rounded-xl shadow-md w-full md:w-64 flex flex-col h-[460px]">
      
      {/* Title  */}
      <div className="min-h-[60px] flex items-center justify-center mb-4">
        <h3 className="text-white text-md font-semibold bg-blue-800 px-3 py-2 rounded-md text-center w-full">
          {props.title}
        </h3>
      </div>

      {/* Body content */}
      <div className="flex-1 overflow-hidden">
        <p className="text-sm text-gray-700 mb-3 font-bold ">
          {props.description}
        </p>
        <ul className="list-disc list-outside pl-5 text-sm text-gray-600 space-y-1">
          {props.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Apply now button  */}
      <div className="mt-4">
        <Link to="/apply" className="bg-green-500 text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-green-700">
          Apply now
        </Link>
      </div>
    </div>
     )


}