import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../../operations/authApi';
import OtpInput from "react-otp-input";
import './VerifyEmail.css'

const VerifyEmail = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [otp,setOtp] = useState("");
    const { signUpData }  = useSelector(state => state.auth)

    const handleResend = () => {
      dispatch(sendOtp(signUpData.email,navigate))
    }

    useEffect(()=>{
        console.log(otp);
    },[otp])

    const handleSubmit = (e) => {
        e.preventDefault()
        const {
            firstName,
            lastName,
            username,
            gender,
            email,
            password,
            confirmPassword,
          } = signUpData;
          dispatch(
            signUp(
                firstName,
                lastName,
                username,
                gender,
                email,
                password,
                confirmPassword,
                otp,
                navigate
            )
          );
    }

  return (
    <div className='otp-input-container'>
      <h1 className='title-verify'>Verify Email</h1>
      <h3 className='title-verify'>An otp has been sent to your mail. Please enter it below to procedd further.</h3>
      <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="otp-input"
                />
              )}
              containerStyle={{
                gap: "0 10px",
              }}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="verifyBtn w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
            <span className='title-verify resend'>
              If you have'nt recieved the otp <span style={{color: "#0E86D4",textDecoration: "underline",cursor: "pointer"}} onClick={handleResend}>Click here</span>
            </span>
    </div>
  )
}

export default VerifyEmail
