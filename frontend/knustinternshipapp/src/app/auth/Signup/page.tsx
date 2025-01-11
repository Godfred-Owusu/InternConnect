'use client';

import { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    console.log(formData);
    alert('Account creation initiated!');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-blue-50">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8">
        <div className="flex items-center mb-8">
          <div className="absolute top-0 left-0 m-4 flex items-center">
            <div className="text-blue-600 text-3xl font-bold mr-2">📘</div>
            <h1 className="text-blue-600 text-2xl font-bold">Intern Connect</h1>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-600 uppercase text-left">
            Join for Free
          </h2>
          <h3 className="text-6xl font-bold text-gray-800 text-left">
            Receive <span className="text-blue-600">Internship</span>
          </h3>
          <h3 className="text-6xl font-bold text-gray-800 text-left">
            <span className="text-blue-600">Letters</span> Swift &
          </h3>
          <h3 className="text-6xl font-bold text-gray-800 text-left">
            Secured with
          </h3>
          <h3 className="text-6xl font-bold text-gray-800 text-left">
            Progress Tracking
          </h3>
          <p className="text-gray-600 mt-2 text-left">
            Get Started and have a wonderful experience with
          </p>
          <p className="text-gray-600 text-left">
            Intern Connect
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white border-2 border-green-500 text-green-500 font-bold py-4 px-10 rounded-full hover:bg-green-500 hover:text-white">
            Explore
          </button>
          <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 py-12">
       
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Create New Account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                placeholder="Username"
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4 relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 relative">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-3/4 h-12 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 font-bold"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already a member?{' '}
            <a href="#" className="text-blue-600 font-bold">
              Login
            </a>
          </p>
        </div>
      </div>
    
  );
};

export default SignupPage;
