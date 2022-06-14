import React from 'react'
import QST from './qustion2'
import './Exam.css';

function headExam() {
  return (
    <div className='head'>
      <div className='ExamName'> 
        <h3> Exam </h3>
        <p className='examTitle'>Adminstartion Base De Donnée</p>
        <hr></hr>
        <h3> Question :</h3>
        <QST/>


      </div>
    </div>
  )
}

export default headExam