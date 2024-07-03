import React from 'react'
import ReactDOM from 'react-dom/client'
import DisplayWhenFetched from './DisplayWhenFetched.jsx'
import './css/Tiles.css'



// console.log(fetchWithIP());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisplayWhenFetched />
  </React.StrictMode>,
)
