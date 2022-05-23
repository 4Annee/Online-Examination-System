import React from 'react';
import Question from './question'
import Editor from "@monaco-editor/react"
import './codEditor.css';

import { useRef,useState} from 'react';
import { loader } from "@monaco-editor/react";

loader.init().then(monaco => console.log("here is the monaco instance:", monaco));



function CodEditor() {
  const editorRef = useRef(null);
  
  function handleEditorValidation(markers) {
    // model markers
    markers.forEach(marker => console.log("onValidate:", marker.message));
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    alert(editorRef.current.getValue());
  }
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }


 
 
  return (

  
    
    <div className='editor-container'>
    <Question/>
    <div>

    <div className='codeEdit'>
    
     <Editor
     
     height="100vh"
     defaultLanguage="javascript"
     defaultValue="// write your answer here ! "
     theme='vs-dark'
     onMount={handleEditorDidMount}
     onChange={handleEditorChange}
     onValidate={handleEditorValidation}
    />
    <div className='btn'>
    <button >Test</button><button>Submit</button>
    </div>
    <div className='language'>
      <select name="language" id="language">
        <option value="c++">C++</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
    </div>
   
     </div>
    </div>
    </div>
  
    
  )

}

export default CodEditor