import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function UserRegistration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!email || !name || !password || !confirmPassword) {
      alert('Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password, role: 'user' }),
      });

      const data = await res.json();
      alert(data.message);
      if (res.ok && data.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-700">User Registration</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="flex items-center justify-between">
              <label htmlFor="email" className="w-1/3 text-sm font-semibold ">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-2/3 bg-white text-black rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
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
                required
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
                required
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
                required
              />
            </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
}