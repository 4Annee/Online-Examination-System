import React from 'react'
import SideBarTeacher from '../sidebar/SideBarTeacher'
import './Drafts.css'
import ExamCard from './ExamCard.jsx'

const Notifications = () => {
  return (
    <div className="draftsContainer">
      <SideBarTeacher />
    <div className="drafts">
      <h1>My Drafts</h1>
      <div className="draftsCards">
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
      </div>
    </div>
    </div>
  )
}

export default Notifications