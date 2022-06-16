import React from 'react'
import Form from './components-Form/Form'
import CodEditor from './components-editor/CodEditor';
import { Route, Routes } from "react-router-dom";
import Exam from './Component-exam/Exam';
import Create from './component-score/Create';
import Qcm from './Component-qcm/Qcm';
import Dashboard from './components/Dashboard/Dashboard'
import Exams from './pages/exams/Exams'
import Results from './pages/results/Results'
import Settings from './pages/settings/Settings'
import ExamReadyPage from './components/examReadyPage/ExamReadyPage'
import ExamPage from './components/ExamPage/ExamPage'

function app() {
  return (
    <div>
    
     
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/code" element={<CodEditor/>} />
      <Route path='/exam' element={<Exam/>}/>
      <Route path='/qcm' element={<Qcm/>}/>
      <Route path='/score' element={<Create/>}/>
      <Route path="/student" element={<Dashboard />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/results" element={<Results />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/examReady" element={<ExamReadyPage/>} />
      <Route path="/startExam" element={<ExamPage />} />

      
    </Routes>

     
    </div>
  )
}

export default app