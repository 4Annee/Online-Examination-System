import React, { useState } from 'react';
import Nav from '../Component-exam/nav';
import QuizScreen from './QuizScreen.js';
import JoinScreen from './JoinScreen.js'
import '../Component-exam/Exam.css';
import './Qcm.css';


function Qcm() {
    const [isQuizStarted,setIsQuizStarted] = useState(false);
  return (
      <>
    <div className="exam-container">
    <Nav/>
    <div className='quiz-container'>
        {
            isQuizStarted ? (
                <QuizScreen retry={()=>setIsQuizStarted(false)}/>
            ) : (
                <JoinScreen start={()=>setIsQuizStarted(true)}/>
            )
        }

    </div>
    </div>
    </>
  )
}

export default Qcm;