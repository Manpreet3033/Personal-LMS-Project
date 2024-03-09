import React from 'react'
import SideBar from './StudentSideBar/SideBar'
import StudentCourses from './StudentCourses'

const StudentCoursePage = () => {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <StudentCourses />
    </div>
  )
}

export default StudentCoursePage
