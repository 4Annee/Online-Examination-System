import React from 'react'
import Form from './components-Form/Form'
import CodEditor from './components-editor/CodEditor';
import { Route, Routes } from "react-router-dom";
import Exam from './Component-exam/Exam';
import Qcm from './Component-qcm/Qcm';
function app() {
  return (
    <div>
    
     
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/code" element={<CodEditor/>} />
      <Route path='/exam' element={<Exam/>}/>
      <Route path='/qcm' element={<Qcm/>}/>


      
    </Routes>

     
    </div>
  )
}

export default app