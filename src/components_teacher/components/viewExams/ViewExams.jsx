import React from 'react'
import './ViewExams.css'
import ExtendedExamTable from '../ExtendedExamTable/ExtendedExamTable'
import SideBarTeacher from '../sidebar/SideBarTeacher'

const ViewExams = () => {
  return (
    <div className="ViewExamsContainer">
      <SideBarTeacher />
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
      </div>
  )
}

export default ViewExams