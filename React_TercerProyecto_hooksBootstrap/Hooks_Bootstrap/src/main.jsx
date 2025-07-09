import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

//import HooksApp from './HooksApp.jsx'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks'
//import Memorize from './06-memos/Memorize'
//import MemoHook from './06-memos/MemoHook.jsx'
//import CallBack from './06-memos/CallBack.jsx'
//import { Padre } from './07-tarea-memo/Padre'
//import  './08-useReducer/intro-reducer.js'
//import { TodoApp } from './08-useReducer/TodoApp.jsx'
import {MainApp} from './09-useContext/MainApp'

import './style.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>,
)
