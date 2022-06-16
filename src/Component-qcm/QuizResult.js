import React from 'react'
import Button from '@mui/material/Button';

function QuizResult({result,retry}) {
  return (
    <div className="join-screen">
       <p>Are You Sure you want to submit your answers?</p>
       <div>
       <Button  variant="outlined"><a href="/qcm">Back</a></Button>
        <Button  variant="contained"><a href="/student">Submit</a></Button>
      </div>
       
     
    </div>
  )
}

export default QuizResult;