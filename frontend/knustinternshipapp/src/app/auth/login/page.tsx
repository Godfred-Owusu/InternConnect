"use client";

import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Email:", email, "Password:", password);
    alert("Login button clicked!");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-50">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 px-6 lg:px-12">
        <div className="flex items-center mb-8">
          <div className="text-blue-600 text-3xl font-bold mr-2">📘</div>
          <h1 className="text-blue-600 text-2xl font-bold">Intern Connect</h1>
        </div>

        <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 text-gray-600"
              >
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full p-2 focus:outline-none rounded-l"
                />
                <span className="p-2 text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-600"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-2 focus:outline-none rounded-l"
                />
                <span className="p-2 text-gray-400">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-600"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full p-2 focus:outline-none rounded-l"
                />
                <span className="p-2 text-gray-400">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-12">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-600 uppercase mb-4">
          Join for Free
        </h2>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-4">
          Receive <span className="text-blue-600">Internship Letters</span>{" "}
          Swift & Secured with Progress Tracking
        </h3>
        <button className="bg-white border-2 border-green-500 text-green-500 font-bold py-2 px-6 rounded-full hover:bg-green-500 hover:text-white">
          Explore
        </button>
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Students"
          className="mt-6 w-64 lg:w-80 rounded"
        />
      </div>
    </div>
  );
};

export default LoginPage;
