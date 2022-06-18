import React from 'react'
import SideBarTeacher from '../sidebar/SideBarTeacher' 
import MainDashTeacher from '../MainDash/MainDashTeacher'
import './DashboardTeacher.css'

const DashboardTeacher = () => {
  return (
    <div className="Dashboard">
        <SideBarTeacher/>
        <div className="contentTeacher">
            <MainDashTeacher/>
        </div>
        
    </div>
  )
}

export default DashboardTeacher