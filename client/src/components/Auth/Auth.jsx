import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL;

export const Auth = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    role: "user",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleActive = (type) => {
    setActive(type);
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (active === "register") {
      setRegisterData({ ...registerData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };

  const validateRegisterForm = () => {
    if (!registerData.name || !registerData.username || !registerData.email || !registerData.password) {
      setError("All fields are required");
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const validateLoginForm = () => {
    if (!loginData.username || !loginData.password) {
      setError("Username and password are required");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegisterForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      await axios.post(`${API}/register`, registerData);
      message.success("Registration successful! Please login.");
      setActive("login");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLoginForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const res = await axios.post(`${API}/login`, loginData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      message.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-4">
      <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-8 rounded-lg shadow-lg border border-gray-800">
        {/* Toggle Container */}
        <div className="flex items-center gap-[2px] rounded-sm w-full max-w-[300px] h-[28px] px-1 text-xs bg-gray-800">
          <div
            onClick={() => handleActive("register")}
            className={`h-6 rounded-sm flex items-center justify-center flex-1 cursor-pointer transition-all duration-200 ${
              active === "register" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Register
          </div>
          <div
            onClick={() => handleActive("login")}
            className={`h-6 rounded-sm flex items-center justify-center flex-1 cursor-pointer transition-all duration-200 ${
              active === "login" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Login
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full mt-4 p-2 bg-red-900/50 text-red-200 text-sm rounded-md border border-red-700">
            {error}
          </div>
        )}

        {/* Form Container */}
        {active === "register" ? (
          <div className="flex flex-col items-center gap-3 w-full mt-6">
            <div className="text-center flex flex-col items-center">
              <h1 className="font-medium text-4xl text-white">Welcome</h1>
              <p className="text-sm text-gray-400">Sign up to Gaminoz</p>
            </div>
            <form className="flex flex-col gap-3 mt-2 w-full" onSubmit={handleRegister}>
              <input
                name="name"
                value={registerData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Full Name"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <input
                name="username"
                value={registerData.username}
                onChange={handleChange}
                type="text"
                placeholder="Enter Username"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <input
                name="email"
                value={registerData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Email"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <input
                name="password"
                value={registerData.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <input
                  type="checkbox"
                  id="terms"
                  className="accent-blue-600 cursor-pointer"
                  required
                />
                <label htmlFor="terms">I agree to the terms and conditions</label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={() => handleActive("login")}
              >
                Login
              </span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full mt-6">
            <div className="text-center flex flex-col items-center">
              <h1 className="font-medium text-4xl text-white">Welcome back</h1>
              <p className="text-sm text-gray-400">Login to Gaminoz</p>
            </div>
            <form className="flex flex-col gap-3 mt-2 w-full" onSubmit={handleLogin}>
              <input
                name="username"
                value={loginData.username}
                onChange={handleChange}
                type="text"
                placeholder="Enter Username"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <input
                name="password"
                value={loginData.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                className="w-full h-12 rounded-lg border border-gray-700 px-4 focus:outline-none bg-gray-900 text-white placeholder-gray-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={() => handleActive("register")}
              >
                Register
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};