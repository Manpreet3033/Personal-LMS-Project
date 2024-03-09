import React from 'react'
import SideBar from '../../../DashboardNavbar/SideBar'
import CourseCreationForm from './CourseCreationForm'

const CreateCourse = () => {
  return (
    <div className='flex w-screen h-screen'>
      <SideBar />
      <div className="flex-1 overflow-auto ml-[-28px]">
        <CourseCreationForm />
      </div>
    </div>
  )
}

export default CreateCourse
