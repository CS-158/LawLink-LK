import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext"; // Switched to simplified AuthContext
import { toast } from "react-toastify";
import animationVideo from "../../../assets/Login_Cl_Lw/images/gtrfe-1.mp4"; // Renamed for clarity
import logoImage from "../../../assets/Login_Cl_Lw/images/logo.png"; // Renamed for clarity
import openIcon from "../../../assets/Login_Cl_Lw/images/open.png"; // Renamed for clarity
import closeIcon from "../../../assets/Login_Cl_Lw/images/close.png"; // Renamed for clarity

function ClientLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use mock login from simplified context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login: Pretend it’s successful
    toast.success("Login successful! Redirecting to dashboard...");
    login(email, password); // Use mock login
    setTimeout(() => {
      navigate("/client/dashboard"); // Fixed path to match your structure
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-5">
      <div className="flex flex-col md:flex-row max-w-[1000px] bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] overflow-hidden md:animate-float">
        {/* Animation Container */}
        <div className="hidden md:flex md:w-[60%] bg-gradient-to-br from-[#0022fc] to-[#001cd8] justify-center items-center overflow-hidden p-4 relative">
          <div className="w-full h-full flex justify-center items-center">
            <video
              src={animationVideo} // Updated to use imported variable
              autoPlay
              loop
              muted
              className="w-full h-auto max-w-[90%] max-h-[90%] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              style={{ zIndex: 1 }}
            ></video>
          </div>
          <div className="absolute bottom-4 left-4 z-10">
            <img src={logoImage} alt="Logo" className="w-20 h-auto" /> // Updated to use imported variable
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-[24px] md:text-[28px] font-bold text-[#02189c] mb-4">
            Log in to your account
          </h1>
          <div className="h-[2px] bg-[#3652fc] w-[80px] mx-auto mb-6"></div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <div className="input-group">
              <label className="text-[14px] font-semibold text-[#827ee3] text-left mb-2">
                Email
              </label>
              <input
                className="border-[2px] border-[#eaeaec] rounded-[8px] px-4 py-3 w-full text-[14px] bg-[#f9f9f9] focus:border-[#3652fc] focus:bg-white focus:outline-none transition-all duration-200"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="input-group">
              <label className="text-[14px] font-semibold text-[#827ee3] text-left mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="border-[2px] border-[#eaeaec] rounded-[8px] px-4 py-3 w-full text-[14px] bg-[#f9f9f9] focus:border-[#3652fc] focus:bg-white focus:outline-none transition-all duration-200 pr-[50px]"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 bg-transparent border-none cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <img src={closeIcon} alt="Hide password" className="w-6 h-6" /> // Updated to use imported variable
                  ) : (
                    <img src={openIcon} alt="Show password" className="w-6 h-6" /> // Updated to use imported variable
                  )}
                </button>
              </div>
              <p className="text-[#3652fc] text-[14px] mt-2 text-right">
                <a
                  href="#"
                  onClick={() => navigate("/email-for-password-reset")}
                  className="hover:underline"
                >
                  Forgot Password?
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="text-[16px] font-bold rounded-[20px] py-3 px-6 bg-[#3652fc] text-white hover:bg-[#6277fe] transition-colors duration-300 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Submit"}
            </button>
          </form>
          <div className="mt-6">
            <p className="text-[14px] text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => navigate("/create-account")}
                className="text-[#3652fc] font-semibold hover:underline"
              >
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientLogin;