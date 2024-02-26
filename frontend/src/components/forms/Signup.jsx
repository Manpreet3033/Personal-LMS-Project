import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSignupData } from '/Users/manpreetsingh/Desktop/chat-app/frontend/src/slices/authSlice.js';
import { sendOtp } from '../../operations/authApi';



const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    firstName: "",
    lastName: "", 
    username: "", 
    gender: "male",
    email: "", 
    password: "",
    confirmPassword: "",
  })
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
        const data = {
          ...formData,
        }
        dispatch(setSignupData(data));
        dispatch(sendOtp(formData.email,navigate));
        setFormData({
            firstName: "",
            lastName: "", 
            username: "", 
            gender: "",
            email: "", 
            password: "",
            confirmPassword: "",
        })
  }

  function handleChange(e){
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  } 

  console.log(formData)

  return (
    <div className='signUpformContainer'>
        <form className='signUpinputContainer' onSubmit={handleSubmit}>
          <h1 className='signUptitle'>SignUp</h1>
          <div className='signUpunderline'></div>
          <div className='signUpinputs'>
          <div className='signUpinput-data'>
          <input name='firstName' value={formData.firstName} type='text' placeholder='First Name' onChange={handleChange}/>
          <input name='lastName' value={formData.lastName} type='text' placeholder='Last Name' onChange={handleChange}/>
          </div>
          <div className='signUpinput-data'>
          <input name='username' value={formData.username} type='text' placeholder='Username' onChange={handleChange}/>
          <select name='gender' value={formData.gender} className='genderSelector' onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          </div>
          <div className='signUpinput-data'>
          <input name='email' value={formData.email} type='email' placeholder='Email' onChange={handleChange}/>
          </div>
          <div className='signUpinput'>
          <input name='password' value={formData.password} type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange}/>
          {showPassword ? <FaEyeSlash size={18} className='eye-logo' onClick={()=>{setShowPassword(!showPassword)}}/> : <FaEye size={18} className='eye-logo' onClick={()=>{setShowPassword(!showPassword)}}/>}
          </div>
          <div className='signUpinput'>
          <input name='confirmPassword' value={formData.confirmPassword} type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' onChange={handleChange}/>
          {showConfirmPassword ? <FaEyeSlash size={18} className='eye-logo' onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/> : <FaEye size={18} className='eye-logo' onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/>}
          </div>
          </div>
          <button className='signUpsubmitBtn' type='submit'>Sign Up</button>
          <div className='signUpcreateAccount'>
          <span>Already have a account? <span className='clickHere' onClick={()=>{navigate("/login")}}>Click here</span></span>
          </div>
        </form>
    </div>
  )
}

export default Signup
