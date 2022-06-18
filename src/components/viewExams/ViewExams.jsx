import React from 'react'
import './ViewExams.css'
import ExtendedExamTable from '../ExtendedExamTable/ExtendedExamTable'

const ViewExams = () => {
  return (
      <div className="ViewExams">
          <div>
            <div className="top">
              <h1>My Exams</h1>
              <button><a href="/createExam">Create New</a></button>
            </div>
            <div className="table">
              <ExtendedExamTable />
            </div>
          </div>
      </div>
  
  )
}

export default ViewExams