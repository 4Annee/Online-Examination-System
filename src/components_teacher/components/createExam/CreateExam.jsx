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
import SideBarTeacher from '../sidebar/SideBarTeacher';


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

  const headers = {
    'Content-Type': 'application/json'
  }


  const [val, setVal] = useState([]);

  


  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i,1);
    setVal(deleteVal);
  }
  

  const arrayOptions = [];
  var examId = '';
  var [counter, setCounter] = useState(1);
  var incrementCounter = () => setCounter(counter + 1);

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
      examId = result.data.id;
      arrayOptions.push(e.target.option.value);
      axios.post("http://localhost:9000/api/Exam/Qt", {
        idExam: examId,
        question: e.target.question.value,
        qtType: e.target.selectQstType.value,
        description: e.target.desc.value,
        score: 0.0,
        choices: arrayOptions
    }, {
      headers: headers
    })
    .then((result) => {
      console.log(result);      
    })
    .catch((error) => {
      console.log(error);
    });
    })
    
    .catch((error) => {
      console.log(error);
    });
  }

  const handleChange = (onChangeValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangeValue.target.value;
    setVal(inputData);
    
  }

  

  const handleAddingQst = (e) => {
    const abc = [...val, []];
    setVal(abc);
  };
  

  return (
    <div className="CreateExamContainer">
      <SideBarTeacher />
    <div className="CreateExam">
      <h1>New Assessment</h1>
      <div className="top">
        <h3>Assessment Information</h3>
        <Button variant="outlined">
          <a href="/viewExams">Back</a>
        </Button>
      </div>
      <form action="" name="assessmentForm" id="assessmentForm" onSubmit={handleSubmit} >
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
          <Fab color="primary" onClick={() => handleAddingQst() && incrementCounter}>
            <AddIcon/>
          </Fab>
        </LightTooltip>
        {val.map((data, i) => {
          return (              
              <Question onChange={e => handleChange(e,i)} />
          )
        })}

        <div className="btnSubmit">
          <input type="submit" value="Submit"/>
        </div>
         </form> 
    </div>
    </div>
  )

}



export default CreateExam