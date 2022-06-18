import React, { useState } from 'react'
import './Question.css'
import Button from '@mui/material/Button';
import Language from '../languages/Language';

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
          <option value="Text">Text Question</option>
          <option value="QCM">QCM Question</option>
          <option value="Code">Code Question</option>
        </select>
        {selects === 'Text' && (
            <div className="text">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" className="desc"/>
                <div className="textQst">
                    <input type="text" placeholder="Type Your Question Here" name="question" />
                </div>
            </div>
        )}
        
        {selects === 'QCM' && (
            <div className="qcm">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" className="desc"/>
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

        {selects === 'Code' && (
            <div className="code">
                <input type="text" placeholder="Type the description of the Question Here" name="desc" className="desc"/>
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