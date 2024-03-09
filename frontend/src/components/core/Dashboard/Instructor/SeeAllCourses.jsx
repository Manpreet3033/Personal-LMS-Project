import React from 'react'
import { useNavigate } from 'react-router-dom'

const SeeAllCourses = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col'>
        <div>
            <h1 className='text-2xl font-bold py-5 px-3'>Courses</h1>
        </div>
        <div className='px-3'>
          <button className='rounded-md bg-[black] hover:bg-[#2e2d2d] hover:transition-all hover:duration-300 py-2 text-[white] px-5 font-bold' onClick={()=>navigate('/instructor/create-course')}>Create a New Course</button>
        </div>
    </div>
  )
}

export default SeeAllCourses
