import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { RiAccountCircleFill,RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { login } from '../../operations/authApi';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword,setShowPassword] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch(login(formData.email,formData.password,navigate))
    setFormData({
      email: "",
      password: "",
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
    <div className='formContainer'>
        <form className='inputContainer' onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <div className='underline'></div>
          <div className='inputs'>
          <div className='input'>
          <RiAccountCircleFill size={25} className='account-logo'/>
          <input name='email' value={formData.email} type='text' placeholder='Email' onChange={handleChange}/>
          </div>
          <div className='input'>
          <RiLockPasswordFill size={25} className='password-logo'/>
          <input name='password' value={formData.password} type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange}/>
          {showPassword ? <FaEyeSlash size={18} className='eye-logo' onClick={()=>{setShowPassword(!showPassword)}}/> : <FaEye size={18} className='eye-logo' onClick={()=>{setShowPassword(!showPassword)}}/>}
          </div>
          </div>
          <button className='submitBtn' type='submit'>Login</button>
          <div className='createAccount'>
          <span>Do not have a account? <span className='clickHere' onClick={()=>{navigate("/signup")}}>Click here</span></span>
          </div>
        </form>
    </div>
  )
}

export default Login
