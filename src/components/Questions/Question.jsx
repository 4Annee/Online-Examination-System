import React, { useState } from 'react'
import './Question.css'
import Button from '@mui/material/Button';
import Language from '../languages/Language';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const arrayOptions = [];
      
      const headers = {
        'Content-Type': 'application/json'
      }

export function AddQuestion(e) {
    
    e.preventDefault();
    axios.post("http://localhost:9000/api/Exam/Qt", {
      Question: e.target.question.value,
      qtType: e.target.selectQstType.value,
      Description: e.target.desc.value,
      choices: arrayOptions.push(e.target.option.value)
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


const Question = () => {

    const [selects, setSelects] = useState();
    const handleShowHide = (event) => {
        const getValue = event.target.value;
        setSelects(getValue);
    }

    const [val, setVal] = useState([]);
    const handleAddingOption = () => {
        const abc = [...val, []];
        setVal(abc);
    }

    const handleChangeOption = (onChangeValue, i) => {
        const inputData = [...val];
        inputData[i] = onChangeValue.target.value;
        setVal(inputData);
      }

      
  return (
    <div className="question">
        
        <label>Question </label>
        <select name="selectQstType" id="selectQstType" onChange={(e) => (handleShowHide(e))}>
          <option value="">Choose The Question Type</option>
          <option value="1">Text Question</option>
          <option value="2">QCM Question</option>
          <option value="3">Code Question</option>
        </select>
        {selects === '1' && (
            <div className="text">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" className="desc"/>
                <div className="textQst">
                    <input type="text" placeholder="Type Your Question Here" name="question" />
                </div>
            </div>
        )}
        
        {selects === '2' && (
            <div className="qcm">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" />
                <div className="qcmQst">
                    <input type="text" placeholder="Type Your Question Here" name="question" />
                </div>
                <Button onClick={() => handleAddingOption()}>Add An Option +</Button>
                {val.map((data, i) => {
                    return (              
                        <div className="options">
                            <input type="text" placeholder="Type The Option Here" onChange={e => handleChangeOption(e,i)} name="option" />
                        </div>
                    )
                })}
            </div>
        )}

        {selects === '3' && (
            <div className="code">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" />
                <div className="codeQst">
                    <input type="text" placeholder="Type Your Question Here" name="question" />
                </div>
                <p>Choose The Allowed Languages :</p>
                <Language/>
            </div>
        )}
    </div>
  )
}

export default Question