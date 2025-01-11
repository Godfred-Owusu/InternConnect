"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/app/components/signupValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log("Data to submit:", JSON.stringify(data));

      // Show an alert to confirm submission

      // Make the POST request with Axios
      const response = await axios.post(
        "http://localhost:5000/api/users",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      reset();
      // Log the server's response
      console.log("Server response:", response.data);

      // Optionally, show a success message

      toast.success("Account created successfully!");
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error creating account:", error);

      // Optionally, show an error message

      toast.error("Failed to create account. Please try again.");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   alert("Account creation initiated!");
  // };

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
          <p className="text-gray-600 text-left">Intern Connect</p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white border-2 border-green-500 text-green-500 font-bold py-4 px-10 rounded-full hover:bg-green-500 hover:text-white">
            Explore
          </button>
          <Link href="/auth/login">
            <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Create New Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <input
              id="username"
              type="text"
              disabled={isSubmitting}
              {...register("name")}
              // value={formData.name}
              // onChange={handleChange}
              className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg text-black"
              placeholder="Name"
            />
            {errors.name?.message && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <input
                id="firstName"
                type="text"
                disabled={isSubmitting}
                {...register("firstName")}
                // value={formData.firstName}
                // onChange={handleChange}
                className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg text-black"
                placeholder="First Name"
              />
              {errors.firstName?.message && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex-1 relative">
              <input
                id="lastName"
                type="text"
                disabled={isSubmitting}
                {...register("lastName")}
                // value={formData.lastName}
                // onChange={handleChange}
                className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg"
                placeholder="Last Name"
              />
              {errors.lastName?.message && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4 relative">
            <input
              id="email"
              type="email"
              disabled={isSubmitting}
              {...register("email")}
              // value={formData.email}
              // onChange={handleChange}
              className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg text-black"
              placeholder="Email"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6 relative">
            <input
              id="password"
              type="password"
              disabled={isSubmitting}
              {...register("password")}
              // value={formData.password}
              // onChange={handleChange}
              className="w-full h-16 p-4 focus:outline-none border border-gray-300 rounded-lg text-black"
              placeholder="Password"
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-3/4 h-12 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 font-bold "
          >
            Create Account
          </button>
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already a member?{" "}
          <Link href="/auth/login" className="text-blue-600 font-bold">
            {" "}
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
