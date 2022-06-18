import React, { useState, useEffect } from 'react'
import './CreateExam.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import Question from '../Questions/Question';
import Button from '@mui/material/Button';
import axios from 'axios';
import AddQuestion from '../Questions/Question';


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(255, 255, 255, 10.17)',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(0px)',
    border: '1px solid rgba(255, 255, 255, 0.28)',
    padding: '5px 20px',
    borderRadius: '8px',
    fontSize: 15,
  },
}));



const CreateExam = () => {

  

  const [val, setVal] = useState([]);
  const handleAddingQst = () => {
    const abc = [...val, []];
    setVal(abc);
  }

  const handleChange = (onChangeValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangeValue.target.value;
    setVal(inputData);
  }


  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i,1);
    setVal(deleteVal);
  }
  const headers = {
    'Content-Type': 'application/json'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/Exam/", {
      assessmentTitle: e.target.assessmentName.value,
      startTime: e.target.startingTime.value,
      endTime: e.target.endingTime.value
    }, {
      headers: headers
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="CreateExam">
      <h1>New Assessment</h1>
      <div className="top">
        <h3>Assessment Information</h3>
        <Button variant="outlined">
          <a href="/viewExams">Back</a>
        </Button>
      </div>
      <form action="" name="assessmentForm" id="assessmentForm" onSubmit={handleSubmit && AddQuestion} >
        <div className="assessmentBox">
          <div className="inputBox">
            <label>Assessment name :</label>
            <input type="text" name="assessmentName" placeholder="Ex: Examen 1 - Semestre 1" />
          </div>
          <div className="inputBox">
            <label>Starting Time :</label>
            <input type="datetime-local" name="startingTime" />
          </div>
          <div className="inputBox">
            <label>Ending Time :</label>
            <input type="datetime-local" name="endingTime" />
          </div>
        </div>
        <LightTooltip title="Add A Question" placement="left">
          <Fab color="primary" onClick={() => handleAddingQst()}>
            <AddIcon/>
          </Fab>
        </LightTooltip>
        {val.map((data, i) => {
          return (              
              <Question onChange={e => handleChange(e,i)}/>
          )
        })}

        <div className="btnSubmit">
          <input type="submit" value="Submit"/>
        </div>
         </form> 
    </div>
  )

}



export default CreateExam