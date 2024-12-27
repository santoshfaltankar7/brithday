import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FirstMessage from './component/FirstMessage'
import SecondPage from './component/SecondPage'
import ThirdPage from './component/thirdPage';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<FirstMessage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
      </Routes>
    </Router>
         
    </>
  )
}

export default App
