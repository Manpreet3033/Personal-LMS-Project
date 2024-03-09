import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUser } from '../../../slices/authSlice'
import { toast } from 'react-hot-toast'
const Navbar = ({scrollToAbout}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token,user } = useSelector(state=>state.auth)
  const handleLogout = () => {
    toast.success("Logged Out Successfully")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    dispatch(setUser(null))
    dispatch(setToken(null))
    navigate('/')
  }

  return (
    <div className='flex sm:flex-row flex-col justify-between px-6 lg:px-10 bg-deep-blue text-[white] w-screen h-16 items-center'>
      <div className='text-white'>
        <h2 className='text-xl font-bold cursor-pointer' onClick={()=> navigate('/')}>[EDUFREE]</h2>
      </div>
      <div className='flex flex-row items-center justify-center gap-3 lg:gap-14'>
        <ul className='flex flex-row gap-3 lg:gap-6 font-medium text-sm uppercase'>
            <li className='cursor-pointer' onClick={()=>{navigate("/")}}>Home</li>
            <li className='cursor-pointer' onClick={()=>navigate('/courses')}>Courses</li>
            <li className='cursor-pointer' onClick={scrollToAbout}>About</li>
            {user ? <li className='cursor-pointer' onClick={()=>navigate("/dashboard")}>Dashboard</li> : <span></span>}
        </ul>
        {token ? (
          <div className='flex flex-row items-center justify-center gap-1 lg:gap-4'>
            <button className='border px-1 lg:px-10 py-1 lg:py-3 md:text-sm rounded-md' onClick={handleLogout}>Logout</button>
          </div> 
          
        ):(
          <div className='flex flex-row items-center justify-center gap-1 lg:gap-4'>
            <button className='border px-1 lg:px-10 py-1 lg:py-3 md:text-sm rounded-md' onClick={()=> navigate('/login')}>Login</button>
          </div> 
        )}
        </div>
    </div>
  )
}

export default Navbar
