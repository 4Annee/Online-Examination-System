import React from 'react'
import Form from './components-Form/Form'
import CodEditor from './components-editor/CodEditor';
import { Route, Routes } from "react-router-dom";
function app() {
  return (
    <div>
    
     
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/code" element={<CodEditor/>} />

      
    </Routes>

     
    </div>
  )
}

export default app