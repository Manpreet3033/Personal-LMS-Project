import React from 'react'
import SideBar from './StudentSideBar/SideBar'
import StudentDashboard from './StudentDashBoard'

const Student = () => {
  return (
    <div>
      <SideBar children={<StudentDashboard />} />
    </div>
  )
}

export default Student
