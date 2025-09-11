import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../apis/AuthApis';

const Login = ({ setFlag }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let loggedinUser = await loginUser(data);
      console.log(loggedinUser);
    } catch (error) {
      console.log("error in login form", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">LogIn</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="username" className="block mb-1 text-gray-700 font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              {...register("username", { required: true })}
              className={`w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">Username is required</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
              className={`w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <span
            onClick={() => setFlag(true)}
            className="text-blue-600 hover:underline cursor-pointer font-medium"
          >
            Register here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
