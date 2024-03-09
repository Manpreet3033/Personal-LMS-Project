import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleFill, RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { login } from "../../operations/authApi";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password, navigate));
    setFormData({
      email: "",
      password: "",
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
        className="flex bg-deep-blue text-[white] items-center pt-5 px-20 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <MdOutlineKeyboardBackspace size={30} />
        <span>Go Back</span>
      </div>
      <div className="bg-deep-blue h-screen flex justify-center items-center">
        <div className="bg-[#fff] h-max px-10 pb-5 rounded-md">
          <h1 className="text-center text-3xl text-[#1B1A55] py-10 bg-[white] font-extrabold">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <RiAccountCircleFill size={25} className="items-start" />
              <input
                name="email"
                value={formData.email}
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <RiLockPasswordFill size={25} className="password-logo" />
              <input
                name="password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
              />
              {showPassword ? (
                <FaEyeSlash
                  size={18}
                  className="eye-logo"
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
            <div className="flex justify-center">
              <button className="submitBtn bg-deep-blue" type="submit">
                Login
              </button>
            </div>
            <div className="createAccount">
              <span>
                Do not have a account?{" "}
                <span
                  className="clickHere text=[#1B1A55]"
                  onClick={() => {
                    toast.success("Naviating to Sign up Page")
                    navigate("/signup");
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

export default Login;
