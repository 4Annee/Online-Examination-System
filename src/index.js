import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import './components-Form/Form.css'

import {BrowserRouter} from 'react-router-dom'
ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.querySelector("#root"))