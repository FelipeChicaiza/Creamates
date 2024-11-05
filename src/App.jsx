import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-block'>
        <h1 className="main-heading">Welcome to the Ship!</h1>
        <h3 className="main-heading">Here you can create your own crewmates and add friends</h3>

        <div className="image-container">
          {/* <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="" /> */}
          <img src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default App;