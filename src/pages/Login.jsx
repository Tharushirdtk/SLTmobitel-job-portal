import React, { useState } from "react";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok && data.success) {
        navigate("/"); 
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="max-w-5xl w-full bg-blue-900 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="bg-blue-950 text-white p-10 rounded-3xl shadow-lg flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-8 text-center">Login</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                />
              </div>

              <button
                type="submit"
                onClick={handleLogin}
                className="w-full bg-blue-300 text-blue-900 hover:bg-gray-200 font-bold py-2 rounded-full"
              >
                Sign In
              </button>
            </form>

            <p className="text-center mt-6">
              Don’t have an account?{" "}
              <Link to="/UserRegister" className="text-green-400 hover:underline font-bold">
                Sign up
              </Link>
            </p>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-white"></div>
              <span className="px-4 text-sm">If you are an admin</span>
              <div className="flex-grow h-px bg-white"></div>
            </div>

            <div className="flex flex-col space-y-3">
              <Link to="/adminLogin" className="w-70 bg-green-700 text-white hover:bg-green-600 font-bold py-2 ">
              Admin login
              </Link>
        
            </div>
          </div>
        </div>

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
