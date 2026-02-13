"use client";
import React, { useState } from "react";
import Header from "../Home/header";
import Footer from "../Home/Footer";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initially false

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("signupEmail");
    const storedPassword = localStorage.getItem("signupPassword");

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("signupEmail");
    localStorage.removeItem("signupPassword");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    alert("Logged out successfully");
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 sm:px-6 lg:px-20 mt-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            className="w-full h-auto rounded-2xl mt-2"
            
            src="/blue.jpg"
            alt="eSIM Network"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
            Welcome to the USA’s Fastest- <br /> Growing eSIM Network!
          </h1>
          <p className="font-semibold text-center lg:text-left text-gray-700">
            Already a Phonico eSIM profile holder? Log in to your <br /> account
            to check details or upgrade your Plan.
          </p>

          {!isLoggedIn ? (
            <>
              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="font-medium mb-1">
                  Enter Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="border border-gray-300 rounded p-3 w-full max-w-md"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col mt-4">
                <label htmlFor="password" className="font-medium mb-1">
                  Enter Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="border border-gray-300 rounded p-3 w-full max-w-md"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleLogin}
                className="mt-5 w-full sm:w-auto px-6 py-3 text-white bg-pink-400 hover:bg-[#f06989] font-bold rounded self-center lg:self-start"
              >
                Submit
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="mt-5 w-full sm:w-auto px-6 py-3 text-white bg-red-500 hover:bg-[#f06989] font-bold rounded self-center lg:self-start"
            >
              Logout
            </button>
          )}

          <p className="font-light text-center lg:text-left mt-6 text-gray-600">
            By signing up to create an account I accept Company’s Terms of Use{" "}
            <br /> & Privacy Policy
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
