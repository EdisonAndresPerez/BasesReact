import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import HooksApp from './HooksApp.jsx'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithCustomHooks/>
  </StrictMode>,
)
