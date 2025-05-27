import React from "react";
import loginImage from "../assets/login.png"; 
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-lg flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-8 text-center">Login</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md text-black"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-md text-black"
                />
              </div>

              <button className="w-full bg-white text-blue-900 hover:bg-gray-200 font-bold py-2 rounded-full">
                Sign In
              </button>
            </form>

            <p className="text-center mt-6">
              Don’t have an account?{" "}
              <Link to="/register" className="text-green-400 hover:underline">
                Sign up
              </Link>
            </p>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-white"></div>
              <span className="px-4 text-sm">or</span>
              <div className="flex-grow h-px bg-white"></div>
            </div>

            <div className="flex flex-col space-y-3">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full">
                Continue with Google
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-auto object-contain rounded-2xl max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
