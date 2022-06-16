import React from 'react'
import SideBar from '../navbar/SideBar' 
import MainDash from '../mainDash/MainDash'
import RightSide from '../rightSide/RightSide'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="Dashboard">
        <SideBar/>
        <div className="content">
            <MainDash/>
            <RightSide/>
        </div>
        
    </div>
  )
}

export default Dashboard