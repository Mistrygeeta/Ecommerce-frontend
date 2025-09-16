import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../apis/AuthApis";


const Registration = ({setFlag}) => {
  const {register, handleSubmit, formState : {errors},} = useForm();


  const onSubmit = async(data) => {
    try {
      let newUserObj = {
        username : data.username,
        fullname :{
          firstname : data.firstname,
          lastname: data.lastname
        },
        email: data.email,
        password: data.password
      }

      let user = await registerUser(newUserObj)
      console.log(user)
    } catch (error) {
      console.log("error in registration", error)
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 bg-blue-50 min-h-screen">
      <form
        className="bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h2 className="text-xl font-bold text-center text-indigo-900 mb-4">
          Create your account
        </h2>
        <div className="mb-3">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
           {...register("username", { required: "Username is required" })}
            className="w-full px-3 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
            type="text"
            id="username"
            name="username"
            placeholder="Unique username"
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
        </div>
        <div className="mb-3 flex gap-2">
          <div className="w-1/2">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
            {...register("firstname", { required: "First name is required" })}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First"
            />
            {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
          </div>
          <div className="w-1/2">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
            {...register("lastname")}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last (optional)"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
          {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
          {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
           <select
          {...register("role")}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-800 transition"
        >
          Register
        </button>
        <div className="text-center mt-4 text-sm text-gray-700">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline font-semibold"
          onClick={() => setFlag((prev) => !prev)}
        >
          Login here
        </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
