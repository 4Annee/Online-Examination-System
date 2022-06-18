import React from 'react'
import './ExamsTeacher.css'
import TableOfExams from '../TableOfExams/TableOfExams'

const ExamsTeacher = () => {
  return (
    <div className="ExamsTeacher">
      <div className="top">
        <h4>Exams</h4>
        <a href="/viewExams">View all</a>
      </div>
      <TableOfExams />
    </div>
  )
}

export default ExamsTeacher