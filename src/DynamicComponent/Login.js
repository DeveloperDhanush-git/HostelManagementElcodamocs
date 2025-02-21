import React from "react";

export default function Login() {
  return (
    <div className="flex  items-left min-h-screen bg-white fontFamily-Montserrat">
      <div className="w-full  bg-white rounded-2xl  p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold  text-gray-900 mb-6 ">
          Welcome to Hostelworld
        </h2>

        {/* Input Fields */}
        <div className="space-y-4 ">
          <div>
            <p className="text-gray-700 font-medium ">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-60 px-4  bg-gray-100 py-3 mt-2  rounded-lg  "
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium ">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className=" w-full md:w-60 bg-gray-100 px-4 py-3 mt-2  rounded-lg "
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <p className="text-s text-gray-500  mt-4 ">
          By continuing, you agree to Hostelworld’s
          <a href="#" className="text-blue-600"> Terms of Service </a>
          and acknowledge our
          <a href="#" className="text-blue-600"> Privacy Policy</a>.
        </p>

        {/* Login Button */}
        <button className=" w-full md:w-1/2  bg-[#69205D]  text-white py-3 rounded-lg mt-6 text-lg font-medium "> 
          Log In
        </button>

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-600 mt-4">Forgot your password?</p>

        {/* Social Login */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300">
            Facebook
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300">
            Google
          </button>
        </div>
      </div>
    </div>
  );
}