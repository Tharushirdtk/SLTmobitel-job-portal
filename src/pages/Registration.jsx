import React from "react";
import { useState } from 'react';
import registerImage from "../assets/Registration .png";

export default function Registration() {

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const res = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, name, password }),
  });

  const data = await res.json();
  alert(data.message);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden p-4 md:p-6">

        <div className="hidden md:flex md:w-[45%] justify-center items-center">
          <img
            src={registerImage}
            alt="Register"
            className="w-72 h-auto object-contain rounded-xl"
          />
        </div>

        <div className="w-full md:w-[55%] bg-blue-900 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>

          <form className="space-y-6">

            <div className="flex items-center justify-between">
              <label htmlFor="userid" className="w-1/3 text-sm font-semibold ">
                User ID
              </label>
              <input
                id="userid"
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-2/3 bg-white text-black rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="name" className="w-1/3 text-sm font-semibold">
                Name
              </label>
                 <input
                  id="name"
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-2/3 bg-white text-black rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                 />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="password" className="w-1/3 text-sm font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-2/3 bg-white text-black rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="confirmPassword" className="w-1/3 text-sm font-semibold">
                Confirm Password
              </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-2/3 bg-white text-black rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>
          </form>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
                 onClick={handleRegister}
                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
            >
                 Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
