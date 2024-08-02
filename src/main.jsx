import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //this is not a real error for some reason.
// import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
