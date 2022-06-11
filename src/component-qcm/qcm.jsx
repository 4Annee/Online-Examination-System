import React from 'react'
import { useState } from 'react'

function qcm() {
    const[isQuizStarted,setIsQuizStarted]=useState(false);
  return (
    
    <>
    <div className='quiz-container'>
        {
            isQuizStarted ? (
                <QuizScreen retry={()=>setIsQuizStarted(false)}/>
            ):(
                <joinScreen start={()=>setIsQuizStarte(true)}/>
            )
        }
    </div>
    </>
  )
}

export default qcm