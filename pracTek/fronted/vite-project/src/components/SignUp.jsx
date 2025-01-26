import React from 'react';
import tailwindcss from 'tailwindcss';

export default function SignupPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-2xl flex overflow-hidden w-[90%] max-w-5xl">
          {/* Left Section */}
          <div className="bg-blue-50 flex-1 p-10 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-purple-600 mb-4">Dummy</h1>
            <img
              src="/dashboard-image.png"
              alt="Dashboard"
              className="w-3/4 mb-6"
            />
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Easy to use Dashboard
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Let’s see what we have new, check it out! So maybe write here
              something more hehe.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-white border rounded-full w-12 h-12 flex items-center justify-center">
                ←
              </button>
              <button className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                →
              </button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              Create your account 👋
            </h2>
            <p className="text-gray-600 mb-6">It’s free and easy</p>
  
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Full name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-3 mt-1 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  E-mail or phone number
                </label>
                <input
                  type="email"
                  placeholder="Type your e-mail or phone number"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-3 mt-1 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Type your password"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-3 mt-1 focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Must be 8 characters at least
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label className="text-gray-700">Sign up as company</label>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <p className="text-gray-600 text-sm">
                  By creating an account means you agree to the{" "}
                  <a href="#" className="text-purple-600 underline">
                    Terms and Conditions
                  </a>{" "}
                  and our{" "}
                  <a href="#" className="text-purple-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white p-3 rounded-lg shadow hover:bg-purple-700">
                Register
              </button>
            </form>
  
            <div className="flex items-center gap-2 mt-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-gray-500 text-sm">or do it via other accounts</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
  
            <div className="flex gap-4 mt-6 justify-center">
              <img src="/google-icon.png" alt="Google" className="w-8 h-8" />
              <img src="/apple-icon.png" alt="Apple" className="w-8 h-8" />
              <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    );
  }