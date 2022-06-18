import React from 'react'
import './Exams.css'
import TableOfExams from '../TableOfExams/TableOfExams'

const Exams = () => {
  return (
    <div className="Exams">
      <div className="top">
        <h4>Exams</h4>
        <a href="/viewExams">View all</a>
      </div>
      <TableOfExams />
    </div>
  )
}

export default Exams