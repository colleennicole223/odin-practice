import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //so that we may place (render) it within the DOM.
import Greeting from './greeting.jsx'
import Button from './Button.jsx' // add button to test hooks
import Person from './Person.jsx' // add button to test hooks

createRoot(document.getElementById('root')).render( 
  //We create a root object by invoking createRoot with an element from our index.html.
  //We invoke the render method which is attached to our root object
  <StrictMode>
    <Person />
    
  </StrictMode>,
)
