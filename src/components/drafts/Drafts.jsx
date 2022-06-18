import React from 'react'
import './Drafts.css'
import ExamCard from './ExamCard.jsx'

const Notifications = () => {
  return (
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
  )
}

export default Notifications