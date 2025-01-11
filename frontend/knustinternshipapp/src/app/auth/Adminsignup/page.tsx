'use client';

import { useState } from 'react';

const StaffLoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality under development!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="flex items-center px-8 py-4">
        <div className="text-blue-600 text-3xl font-bold mr-2">📘</div>
        <h1 className="text-blue-600 text-2xl font-bold">Intern Connect</h1>
      </header>

      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Staff Login</h1>
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2 text-gray-600"
                >
                  First Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-2 bg-transparent focus:outline-none rounded-l-lg"
                  />
                  <span className="p-2 text-gray-400">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2 text-gray-600"
                >
                  Last Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-2 bg-transparent focus:outline-none rounded-l-lg"
                  />
                  <span className="p-2 text-gray-400">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-600"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 bg-transparent focus:outline-none rounded-l-lg"
                />
                <span className="p-2 text-gray-400">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-600"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-2 bg-transparent focus:outline-none rounded-l-lg"
                />
                <span className="p-2 text-gray-400">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <footer className="flex justify-end p-4">
        <span className="text-blue-600 text-3xl">
          <i className="fas fa-folder"></i>
        </span>
      </footer>
    </div>
  );
};

export default StaffLoginPage;
