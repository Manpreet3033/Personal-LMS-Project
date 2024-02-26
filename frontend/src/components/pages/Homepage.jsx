import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '/Users/manpreetsingh/Desktop/chat-app/frontend/src/slices/authSlice.js'
import { useDispatch } from 'react-redux'

const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Homepage
