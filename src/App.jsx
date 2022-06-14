import React from 'react'
import Form from './components-Form/Form'
import CodEditor from './components-editor/CodEditor';
import { Route, Routes } from "react-router-dom";
import Exam from './Component-exam/Exam';
import {CreateCodeRunning} from './Services/CodeRunningService';
import {getProgrammingLanguages} from './Services/ProgrammingLanguagesService';
import {CreateQuestionSkeletone,UpdateQuestionSkeletone,DeleteQuestionSkeletone} from './Services/QuestionSkeleton.js';
function app() {
  
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/code" element={<CodEditor/>} />
      <Route path='/exam' element={<Exam/>}/>

      
    </Routes>

    </div>
  )
}

export default app