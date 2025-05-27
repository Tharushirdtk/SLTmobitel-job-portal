import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aboutImage from "../assets/aboutUs.png"

export default function AboutUs(){

    return(
        <>
         
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center bg-white rounded-3xl shadow-lg p-8 md:p-16 h-full">
           <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[98%] max-w-6xl">
                     <NavBar />
                   </div>
      
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-6">
            We are a team committed to delivering exceptional digital experiences. 
            Our focus is on creating clean, modern, and user-friendly solutions that 
            help businesses grow. Whether you're a startup or an established brand, 
            we're here to bring your ideas to life with passion and precision.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg self-start">
            Learn More
          </button>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center items-center h-full">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-md h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </div>
         <Footer/>
        </>

    )
}