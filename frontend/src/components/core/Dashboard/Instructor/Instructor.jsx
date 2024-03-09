import React from 'react'
import SideBar from '../../DashboardNavbar/SideBar'
import DashBoard from './DashBoard'
const Instructor = () => {
  return (
    <div className='flex h-screen'>
          <SideBar children={<div className='hidden'></div>} />
          <DashBoard />
    </div>
  )
}

export default Instructor
