import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../../../slices/authSlice";
import { sendOtp } from "../../operations/authApi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    role: "Student",
    gender: "male",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    dispatch(setSignupData(data));
    dispatch(sendOtp(formData.email, navigate));
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      role: "Student",
      gender: "male",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(formData);

  return (
    <>
      <div
        className="flex bg-deep-blue text-[white] items-center px-20 py-5 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <MdOutlineKeyboardBackspace size={30} />
        <span>Go Back</span>
      </div>
      <div className="bg-deep-blue h-screen flex justify-center items-center">
        <div className="bg-[#fff] h-max px-10 pb-5 rounded-md">
          <h1 className="text-[#1B1A55] text-center font-extrabold text-3xl py-5">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex sm:flex-row flex-col gap-5 py-5 justify-center items-center">
              <input
                className="px-2"
                name="firstName"
                value={formData.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                className="px-2"
                name="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 pb-5">
              <input
                className="px-2"
                name="username"
                value={formData.username}
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
              <select
                className="px-2 py-5 bg-[#e8e8e8]"
                name="gender"
                defaultValue={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex gap-5 pb-5">
              <input
                className="px-2"
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <select
                className="px-2 py-5 bg-[#e8e8e8]"
                name="role"
                defaultValue={formData.role}
                onChange={handleChange}
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>
            </div>
            <div className="flex justify-center items-center relative pb-5">
              <input
                className="px-2"
                name="password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
              />
              <div className="absolute right-4">
                {showPassword ? (
                  <FaEyeSlash
                    size={18}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    size={18}
                    className="eye-logo"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center relative pb-5">
              <input
                className="px-2"
                name="confirmPassword"
                value={formData.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <div className="absolute right-4">
                {showPassword ? (
                  <FaEyeSlash
                    size={18}
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    size={18}
                    className="eye-logo"
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center px-5 py-3 rounded-xl text-[white] bg-deep-blue"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center py-5">
              <span>
                Already have a account?{" "}
                <span
                  className="clickHere text-[#1B1A55]"
                  onClick={() => {
                    toast.success("Navigating to Login Page")
                    navigate("/login");
                  }}
                >
                  Click here
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
